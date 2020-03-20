var num = [10, 5, 60, 30, 20, 20]

var compare = function (a, b) {

    //if (a > b) {
    //    return 1
    //} else {
    //    return -1
    //}

    return a - b

}




window.onload = functionInit


function functionInit() {
    var element = document.getElementById('sort')

    element.onclick = sorted


}


function sorted() {
    num.sort(compare)
    console.log(num)
}