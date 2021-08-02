let name = 'nanda';

let display = st => console.log(st);
Array.from(name).forEach(c => display(c));

Object.assign([], name).forEach(c => display(c));

console.log('=================');
[...name].forEach(i => display(i));

name.split('').forEach(c => display(c));
