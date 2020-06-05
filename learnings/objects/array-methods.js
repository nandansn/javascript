let arr = [];


// array splice



let addItems = () => {
    do {

        let arrItem = prompt("enter product /to stop, press q:");

        if (arrItem == 'q') {
            break;
        } else {
            arr.push(arrItem);
        }
        

    } while(true)
    display();
}

let display = () => {
    
    if (arr.length > 0) {
        alert(arr.toString())
    } else {
        alert("array is empty!!!")
    }
    
}

addItems();
