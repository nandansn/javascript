var days = []

function addDays(num) {

    while (num != 0) {
        day = prompt('Enter day:')

        days.push(day)

        num--;
    }
}


function printDays() {
    alert('Number of days ' + days.length)
    days.forEach(day => {
        console.log(day)
    });
}

function oldForLoop() {

    for (let index = 0; index < days.length; index++) {
        const element = array[index];
        console.log(element)

    }

}

numberOfDays = prompt('Number of days')

addDays(numberOfDays);
//printDays();
oldForLoop();