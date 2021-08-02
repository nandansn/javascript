let name = "nandakumar";

let nameChars = Array.from(name);

console.log(nameChars);

for (let itm of nameChars) {
  console.log(itm);
}


let person = {
  name: 'nanda',
  age:40,
  location:'erode'

}

console.log(person);

for (let key in person) {
  console.log(person[key]);
}

