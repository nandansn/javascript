var Student ={}

function getStudent(){

    Student = {
        name:"Nivrithi",
        class:"1",
        mark:"100"
    }

    return Student;
}


function displayStudent(Student){

    console.log(Student.name)
    console.log(Student.class)
    console.log(Student.mark)

    
}

displayStudent(getStudent())