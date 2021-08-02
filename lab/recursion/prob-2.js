// print list
let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};


function printList(list) {


    if (list === null) {

     } else {
        console.log(list.value)
        printList(list.next);
    }
}

printList(list)
