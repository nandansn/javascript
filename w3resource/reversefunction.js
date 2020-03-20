function reveresTheNumber(number){
    
    sum = 0
    while(number > 0){
        remainder = number % 10
        sum = remainder + (sum * 10)
        number = parseInt(number / 10)        
    }

    return sum
    

}

console.log(reveresTheNumber(123))