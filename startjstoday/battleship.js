var location1 = 0
var location2 = 0
var location3 = 0

var userCurrentGuess;

var hits = 0;
var guesses = 0;

var shipNotSunk = true
var maxGuess = 10


while (shipNotSunk) {
    userCurrentGuess = 0 //get user input
    if (guesses >= maxGuess) {
        alert("Sorry dude, you reached max guesses. Better luck next time.")
        break;
    }

    if (hits == 3) {
        shipNotSunk = false
        alert('You sunk my battleship.... :(')
        shootingAccuracy(guesses)
    } else {
        userCurrentGuess = prompt('Enter a number between [0-6] that you guess')
        setLocations()
        if (userCurrentGuess >= 0 && userCurrentGuess <= 6) {
            if (userCurrentGuess == location1 || userCurrentGuess == location2 || userCurrentGuess == location3) {
                hits = hits + 1
                alert("Yeaa...You hit it buddy !!!!")

            } else {
                alert("You missed it")
            }

            guesses = guesses + 1

        } else {
            alert('enter valid input')
        }

    }
}

function shootingAccuracy(guesses) {
    var accuracy = 0;
    accuracy = (3 / guesses) * 100
    alert("hey dude, you took " + guesses + " guesses and your shooting accuracy is " + accuracy + "%")
}

function setLocations() {
    location1 = Math.floor(Math.random() * 5)

    while (location1 <= 0 && location1 >= 5) {
        location1 = Math.floor(Math.random() * 5)

    }
    location2 = location1 + 1
    location3 = location2 + 1
    alert(location1 + " " + location2 + " " + location3)

}