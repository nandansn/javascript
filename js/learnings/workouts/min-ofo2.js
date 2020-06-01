function min(a, b) {
    return ((a - b) < 0) ? a : b
}

let a = prompt("a:")
let b = prompt("b:")

alert(min(Number(a), Number(b)))