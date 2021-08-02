class Person {
   constructor(name, age) {
       this.name = name;
       this.age = age;
   }

   display() {
       console.log('Name: '+ this.name );
       console.log('Age: '+ this.age);
   }
}

let person = new Person('Nanda', 40);

class Employer extends Person {
    constructor(name, age, turnOver, jobTitle) {
        super(name, age);
        this.turnOver = turnOver;
        this.jobTitle = jobTitle;
    }

    display() {
        super.display();
        console.log('Turnover: ' + this.turnOver);
        console.log('Job Title: ' + this.jobTitle);
    }

}

let employer = new Employer(person.name, person.age, '1 Billion Dollars', 'CEO');
employer.display();

class Employee extends Person {
    constructor(name, age, salary, jobTitle) {
        super(name, age);
        this.salary = salary;
        this.jobTitle = jobTitle;
    }

    display() {
        super.display();
        console.log('Job Title: ' + this.jobTitle);
        console.log('Salary: ' + this.salary);

    }
}

let jobTitles = ['Engineer','Manager','CEO'];

let employee1 = new Employee('KK', '30', '300000', jobTitles[0]);
let employee2 = new Employee('NK', '40', '600000', jobTitles[1]);




class Perks {
    constructor() {
    }

    static calc(person) {
        if (person instanceof Employer) {
            person.display();
            console.log("Keep it up...")
        } else if (person instanceof Employee) {
            if (person.jobTitle === jobTitles[0]) {
                person.display();
                console.log("Bonus and RSU");
            } else if (person.jobTitle === jobTitles[1]) {
                person.display();
                console.log("RSU");
            }
        }
    }
}

let companyArray = [employer, employee1, employee2];

companyArray.forEach(e => Perks.calc(e));