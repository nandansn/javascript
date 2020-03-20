function createOrderFunction(ticketType) {

    var orderFunction;

    if (ticketType == 'firstclass') {
        orderFunction = function () {
            alert('Wine will be served')

        }
    } else {
        orderFunction = function () {
            alert('beer will be served')
        }
    }

    return orderFunction
}


window.onload = functionInit


function functionInit() {


    var ticketElement = document.getElementById('first')

    ticketElement.onclick = createOrderFunction(ticketElement.innerText)




}