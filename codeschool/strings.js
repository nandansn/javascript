var userName = "nanda kumar";

var userNames = userName.split(" ");

console.log(userNames.length)

userName = userNames[0].charAt(0).toUpperCase() + userNames[0].substring(1,userNames[0].length) + " " + userNames[1].charAt(0).toUpperCase() + userNames[1].substring(1,userNames[1].length) 

console.log(userName)


