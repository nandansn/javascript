function peCalc(cmp, eps) {

    var pe = 0
    pe = cmp / eps
    return pe
}

var cmp = 0;
var eps = 0;
var pe = 0;

cmp = prompt('Enter CMP:')
eps = prompt('Enter EPS:')

pe = peCalc(cmp, eps)

console.log(pe)