function palindromeOrNot(number){

    reverse = 0;
    temp = number;
    

    while(number > 0){
        remainder = number % 10
        reverse =  remainder + (reverse * 10)
        number = parseInt(number/10)
    }

    

    if (reverse == temp){
        return true
    }else{
        return false
    }

}


console.log(palindromeOrNot(112))