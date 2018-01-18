function Employee(name, company, salary){

    this.name = name
    this.company = company
    this.salary = salary
}

function display(Employee){
    console.log(Employee.name)
    console.log(Employee.company)
    console.log(Employee.salary)
}

var employees = [
    new Employee('nanda','epam','1000'),
    new Employee('kumar','amazon','2000')
];

function displayAllEmployees(){

    employees.forEach(element => {
        display(element)
    });
}

displayAllEmployees()