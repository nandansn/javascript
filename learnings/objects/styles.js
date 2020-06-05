let styles = [];

let appendToTheEnd = (item) => {
    styles.push(item)
}

let replaceIntheMiddle = (item) => {
    let length = styles.length;
    

    if ((length % 2) != 0) {
        let index = Math.floor((length / 2));
        
        styles[index] = item;

    } else {
        alert("array length is not odd, unable to add it in the middle.")
    }

}

let removeTheFirstValue = () => {
    styles.shift();
}

let prepend = () => {

}

let addToStyles = () => {
    styles[0] = "Jazz";
    styles[1] = "Blues";
}

let displayStyles = () => {
    alert(styles)
}

addToStyles();
displayStyles();
let style = "";
style = prompt("Append to the end:")

appendToTheEnd(style);
displayStyles();

style = prompt("Replace in the middle:")
replaceIntheMiddle(style);
displayStyles();

removeTheFirstValue();
displayStyles();

let arr = ['a','b'];

arr.push(function() {
    alert(this)
});

alert(arr[2]());
