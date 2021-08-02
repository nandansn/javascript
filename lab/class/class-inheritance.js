class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    info() {
        console.log(this.name);
        console.log(this.age);
    }
}

class Employee extends Person {
    constructor(name, age, salary, title) {
        super(name,age);
        this.salary = salary;
        this.title = title;
    }
    // overriding the methid
    info() {
        super.info();
        console.log(this.title);
        console.log(this.salary);
    }

    toString() {
        return this.name;
    }

}

class EmployeeFactory {
    static create(name, age, salary, title) {
        return new Employee(name, age, salary, title);
    }

    static compareAge(emp1, emp2) {
        console.log('compare:' + emp1.age + " " + emp2.age)
        let c = emp1.age - emp2.age;
        console.log(c);
        return c;
    }


}

let employees = [

    EmployeeFactory.create('a',40,2000, 'manager'),
    EmployeeFactory.create('b',41,2000, 'manager'),
    EmployeeFactory.create('c',39,2000, 'manager'),

]

let sorted = employees.sort(EmployeeFactory.compareAge);


sorted.forEach(emp => {
    console.log(emp.toString())
})
