function add(a,b,c=2){
    console.info(arguments[0], arguments[1], arguments[2])
    return a + b + c;
}

//with all args
console.info(add(2,2,3))

//with all 2 args
console.info(add(3,3))

console.info(add(1))