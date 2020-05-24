let username = prompt('Who is this ?')
if (username == 'Admin') {
    let password = prompt('Enter Password:')
    if (password == 'TheMaster') {
        alert('Welcome ')
    } else {
        alert('Wrong password')
    }
} else if (username == '' || username == null) {
    alert("Canceled")

} else {
    alert('Sorry, I dont know you.')
}