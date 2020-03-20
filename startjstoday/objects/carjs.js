var car = {
    name: 'Fortunner',
    owner: 'Nanda'
    //print: function () {
    //    console.log(this.name)
    //    console.log(this.owner)
    //}
};

//car.print()

var elements = ""

for (const key in car) {
    if (car.hasOwnProperty(key)) {
        const element = car[key];

        console.log(element)
        elements = elements + key + ":" + element + "<br>"


    }
}

document.getElementById("desc").innerHTML = elements