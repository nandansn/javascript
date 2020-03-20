(function (draggable, droppable) {
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b)
            if (b.hasOwnProperty(p)) d[p] = b[p];

        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var dnd;
    (function (dnd) {
        "use strict";

        function simulate(draggable, droppable) {
            var store = new DragDataStore();
            store.mode = "readwrite";
            var dataTransfer = new DataTransfer(store);
            var dragstartEvent = createEventWithDataTransfer("dragstart", dataTransfer);
            draggable.dispatchEvent(dragstartEvent);
            store.mode = "readonly";
            var dragOverEvent = createEventWithDataTransfer("dragover", dataTransfer);
            droppable.dispatchEvent(dragOverEvent);
            var dropEvent = createEventWithDataTransfer("drop", dataTransfer);
            dropEvent.clientX = 300;
            dropEvent.clientY = 100;
            dropEvent.pageX = 474;
            dropEvent.pageY = 196;
            droppable.dispatchEvent(dropEvent);
            store.mode = "protected";
            var dragendEvent = createEventWithDataTransfer("dragend", dataTransfer);
            draggable.dispatchEvent(dragendEvent);
        }
        dnd.simulate = simulate;

        function createEventWithDataTransfer(type, dataTransfer) {
            var event = document.createEvent("CustomEvent");
            event.initCustomEvent(type, true, true, null);
            event.dataTransfer = dataTransfer;
            return event;
        }

        var DataTransfer = (function () {
            function DataTransfer(store) {
                this.store = store;
                this.typeTable = {};
                this.effectAllowed = "uninitialized";
                this.types = [];
                this.files = new FileList();
            }
            DataTransfer.prototype.setDragImage = function (element, x, y) {};
            DataTransfer.prototype.getData = function (format) {
                if (this.store.mode === "protected") {
                    return "";
                }
                format = format.toLowerCase();
                var convertToUrl = false;
                if (format === "text") {
                    format = "text/plain";
                } else if (format === "url") {
                    format = "text/uri-list";
                    convertToUrl = true;
                }
                if (!(format in this.typeTable)) {
                    return "";
                }
                var result = this.typeTable[format];
                if (convertToUrl) {
                    result = parseTextUriList(result)[0] || "";
                }
                return result;
            };
            DataTransfer.prototype.setData = function (format, data) {
                if (!this.store) {
                    return;
                }
                if (this.store.mode !== "readwrite") {
                    return;
                }
                format = format.toLowerCase();
                if (format === "text") {
                    format = "text/plain";
                } else if (format === "url") {
                    format = "text/uri-list";
                }
                this.typeTable[format] = data;
                this.types = Object.keys(this.typeTable);
            };
            DataTransfer.prototype.clearData = function (format) {
                var _this = this;
                if (!this.store) {
                    return;
                }
                if (this.store.mode !== "readwrite") {
                    return;
                }
                if (typeof format === "undefined") {
                    this.types.filter(function (type) {
                            return type !== "Files";
                        })
                        .forEach(function (type) {
                            return _this.clearData(type);
                        });
                    return;
                }
                format = format.toLowerCase();
                if (format === "text") {
                    format = "text/plain";
                } else if (format === "url") {
                    format = "text/uri-list";
                }
                delete this.typeTable[format];
                this.types = Object.keys(this.typeTable);
            };
            return DataTransfer;
        }());
        dnd.DataTransfer = DataTransfer;

        var FileList = (function () {
            function FileList() {
                this.length = 0;
            }
            FileList.prototype.item = function (index) {
                return null;
            };
            return FileList;
        }());
        dnd.FileList = FileList;

        var DragDataStore = (function () {
            function DragDataStore() {}
            return DragDataStore;
        }());

        var DataTransferItemList = (function () {
            function DataTransferItemList(store) {
                this.store = store;
                this.items = [];
                this.typeTable = {};
                this.length = 0;
            }
            DataTransferItemList.prototype.remove = function (idx) {
                if (this.store.mode !== "readwrite") {
                    throw InvalidStateError.createByDefaultMessage();
                }
                var removed = this.items.splice(idx, 1)[0];
                this.syncInternal();
                if (removed) {
                    delete this.typeTable[removed.type];
                }
            };
            DataTransferItemList.prototype.clear = function () {
                if (this.store.mode !== "readwrite") {
                    throw InvalidStateError.createByDefaultMessage();
                }
                this.items = [];
                this.syncInternal();
            };
            DataTransferItemList.prototype.add = function (data, type) {
                if (this.store.mode !== "readwrite") {
                    return null;
                }
                if (typeof data === "string") {
                    var typeLowerCase = type.toLowerCase();
                    if (this.typeTable[typeLowerCase]) {
                        throw NotSupportedError.createByDefaultMessage();
                    }
                    var stringItem = DataTransferItem.createForString(data, typeLowerCase, this.store);
                    this.items.push(stringItem);
                    this.typeTable[typeLowerCase] = true;
                } else {
                    var fileItem = DataTransferItem.createForFile(data, this.store);
                    this.items.push(fileItem);
                }
                this.syncInternal();
            };
            DataTransferItemList.prototype.syncInternal = function () {
                var _this = this;
                for (var i = 0; i < this.length; i++) {
                    delete this[i];
                }
                this.items.forEach(function (item, j) {
                    _this[j] = item;
                });
                this.length = this.items.length;
            };
            return DataTransferItemList;
        }());
        dnd.DataTransferItemList = DataTransferItemList;

        var DataTransferItem = (function () {
            function DataTransferItem(data, kind, typeLowerCase, store) {
                this.data = data;
                this.store = store;
                this.type = typeLowerCase;
                this.kind = kind;
            }
            DataTransferItem.prototype.getAsString = function (callback) {
                var _this = this;
                if (callback) {
                    return;
                }
                if (this.store.mode !== "readwrite") {
                    return;
                }
                if (this.kind !== "string") {
                    return;
                }
                setTimeout(function () {
                    callback(_this.data);
                }, 0);
            };
            DataTransferItem.prototype.getAsFile = function () {
                if (this.store.mode !== "readwrite") {
                    return null;
                }
                if (this.kind !== "string") {
                    return null;
                }
                return this.data;
            };
            DataTransferItem.createForString = function (data, type, store) {
                return new DataTransferItem(data, "string", type, store);
            };
            DataTransferItem.createForFile = function (data, store) {
                return new DataTransferItem(data, "file", null, store);
            };
            return DataTransferItem;
        }());
        var InvalidStateError = (function (_super) {
            __extends(InvalidStateError, _super);

            function InvalidStateError(message) {
                _super.call(this, message);
                this.message = message;
                this.name = "InvalidStateError";
            }
            InvalidStateError.createByDefaultMessage = function () {
                return new InvalidStateError("The object is in an invalid state");
            };
            return InvalidStateError;
        }(Error));
        var NotSupportedError = (function (_super) {
            __extends(NotSupportedError, _super);

            function NotSupportedError(message) {
                _super.call(this, message);
                this.message = message;
                this.name = "NotSupportedError";
            }
            NotSupportedError.createByDefaultMessage = function () {
                return new InvalidStateError("The operation is not supported");
            };
            return NotSupportedError;
        }(Error));

        function parseTextUriList(textUriList) {
            textUriList = textUriList.replace(/\r\n$/, "");
            if (textUriList === "") {
                return [];
            }
            return textUriList.split(/\r\n/).filter(function (line) {
                return line[0] !== "#";
            });
        }
        dnd.parseTextUriList = parseTextUriList;;
    })(dnd || (dnd = {}));
    dnd.simulate(draggable, droppable);
})(document.querySelector('#Source'), document.querySelector('#dataFlowCanvas'));