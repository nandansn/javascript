

let details = (person) => {
    alert(person.name);
    alert(person.age);
};

let addPerson = (name,age) => {
    let person = {};
    person.name = name;
    person.age = age;
    return person;
}

let clone = (person) => {
    let newPerson = {};
    Object.assign(newPerson, person);
    details(newPerson);
}


alert("Welcome !!!")

if (confirm("Do you want to add person?")) {
    let name = prompt("Enter name:")
    let age = prompt("Enter age:")

    let person = addPerson(name,age);
    details(person);
    clone(person);
    
} 

