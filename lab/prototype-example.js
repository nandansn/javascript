let person = {
    name:'nanda',
    age:'40'
}

let emp = Object.create(person)

console.log(emp.name)

emp.name = 'kumar'

console.log(emp)