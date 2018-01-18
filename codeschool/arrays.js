var numbers1 =[1,2,3,4]
var numbers2 =[9,8,7,6,5]

numbers1 =numbers1.concat(numbers2)

console.log("conact:"+numbers1)

console.log("sorted:"+numbers1.sort())

numbers1.sort(function(a,b){
    return b -a
})

numbers1.forEach(element => {
    
  console.log(element)


});

var filteredNumbers = numbers1.filter(num => num > 5)

filteredNumbers.forEach(num => console.log(num))

var allTheNumbersGreaterThanZero = numbers1.every(num => num > 0)

console.log(allTheNumbersGreaterThanZero)

var splCharSeperatedArray = numbers1.join(";")

console.log(splCharSeperatedArray)

var filledWithNewNumber = numbers1.fill(99,0,2)

console.log(filledWithNewNumber)

var findNumber = numbers1.find(num => num == 99)

console.log(findNumber)


