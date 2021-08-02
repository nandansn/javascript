class User {

}

console.log(typeof User);

class Customer {
    constructor(name) {
        this.name = name;
    }
}

console.log(typeof new Customer('nanda'));

class Login {
    constructor(uname,upassword) {
        this.uname = uname;
        this.upassword = upassword;
    }

    loginAction() {
        console.log("type user name: " + this.uname);
        console.log("type user password: " + this.upassword);
    }

}

let login = new Login('abcd','abcd');
login.loginAction();

class DA {
    constructor(name, type) {
        this.name = name;
        this.type = type;
    }


}

for(let k in new DA('b',123)) {
    console.log(k)
}


// class expression

let Compartment = class {
    constructor(name) {
        this.name = name;
    };

    display() {
        console.log(this.name)
    }
}

new Compartment('nanda').display();

let connection = class Connection {
    constructor() {
    }

    create() {
        console.log('connection created')
    }
}

new connection().create();


function createUser(name, age) {
    return class {
        constructor() {
            this.name = name;
            this.age = age;

        }

        display = () => {
            console.log(this.name);
        }

        display2() {
            console.log(this.name);
        }

    }
}

let user = createUser('nanda', 60);

let userObject = new user();

setTimeout(userObject.display, 1000);

setTimeout(userObject.display2, 1000);