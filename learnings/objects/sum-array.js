let nums = [];
do {
    let num = prompt("Enter Number");
   if (Number.isNaN(parseInt(num))) {
        break;
    } else {
        nums.push(parseInt(num));
    }
      
    
} while(true);
let c = 0;
let sum = () => nums.forEach(element => {
    c = c + element;
});

let display = function(sum) {
    sum();
    alert(c)
}

display(sum)