function currentDateAndTime(){

    var date = new Date()
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

    console.log("Today is ",days[date.getDay()])
    
    if(date.getHours() > 11){
        console.log("Now time is ",date.getHours() - 12 +":"+ date.getMinutes() +":" + date.getSeconds() +" PM")
    } else{
        console.log("Now time is ",date.getHours() + date.getMinutes() + date.getSeconds() +" AM")
    }
   
    
}

currentDateAndTime()