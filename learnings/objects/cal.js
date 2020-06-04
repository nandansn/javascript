let calc = {

    a: 0,
    b: 0,
    c: 0,
    d: 0,

    read : function () {

        this.a = Number(prompt("a:"));
        this.b = Number(prompt("b:"));


    },

    sum : function () {
        this.c = this.a + this.b;
        return this.c;
    },
    mul: function () {
        this.d =  this.a * this.b;
        return this.d;
    }
}

calc.read();
alert(calc.sum());
alert(calc.mul());





