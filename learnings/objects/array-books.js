let books = [];

let addBooks = function(book) {
    books.push(book)
}

let getBook = function() {
    let book = {};
    book.name = prompt("book name:");
    book.author = prompt("book.price");
    
    return book;

}

let display =  () =>  {
    books.forEach(book => {
    alert(book.name);
    alert(book.author);
    });
}

alert("Welcome to NSN book store!!!")


do {
    if (confirm("do you want to add books")) {
        addBooks(getBook());
    } else if (confirm("do you want to display added books")) {
        display();
    } else {
        break;
    }
    
} while(true)







