function power(a, b) {
    let power = 1;
    for (let index = 0; index < b; index++) {
        power = power * a

    }
    return power;
}

let a = prompt("enter a:")
let b = prompt("enter b:")

alert(power(a, b))