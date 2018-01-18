var stack = []

stack.push('Nanda')
stack.push('Dinesh')
stack.push('Nanda')
stack.push('Karthi')



console.info(stack)

stack.sort(function(a,b){

    return a.length - b.length
})

console.info("After Sorting:",stack)

console.clear

console.info("Last element in the array:",stack.pop())