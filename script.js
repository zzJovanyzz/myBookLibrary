let myLibrary = [];


/*
    Object Constructor for a book
*/
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;


}

Book.prototype.info = function(){
    console.log(this.title + " by " + this.author)
}


/*
    openForm()
*/
function openForm(){
    document.getElementById("myForm").style.display = "grid";
    document.getElementsByTagName("header")[0].style.opacity = .3;
    document.getElementById("myAddBook").style.opacity = .3;
    document.getElementById("bookHolder").style.opacity = .3
    

}

function removeBook(ele){
    let myLength = ele.id.length - 1
    let bookId = ele.id.substring(0, myLength)
    document.getElementById(bookId).remove()
    
}

function toggleRead(ele){
    if (document.getElementById(ele.id).innerText == "Read" ){
        document.getElementById(ele.id).textContent = "Not Read"
        document.getElementById(ele.id).style.backgroundColor = "red"
             
    } else {
        document.getElementById(ele.id).textContent = "Read"
        document.getElementById(ele.id).style.backgroundColor = "green"
    }
    
}


function createBookCard(book){
    let myBackGroundColor;


        document
                .getElementById("bookHolder")
                .insertAdjacentHTML("beforeend", 
                `<p class='books' id='${book.title}'> Title: <span class='myBookTitle'>${book.title}</span>
                <br> Author: ${book.author}
                <br> Length: ${book.pages} Pages
                <br> 
                <br> <button id='${book.title}Read' class='readButtons' onclick='toggleRead(this)'> ${book.read} </button>
                <br>
                <br> <button class='removeButtons' id='${book.title}2' onclick='removeBook(this)'> Remove this book</button>
                </p>
                `)
    
    
    if (book.read == "Read"){
        
        document.getElementById(`${book.title}Read`).style.backgroundColor = "green"
    } else if (book.read == "Not Read") {
        document.getElementById(`${book.title}Read`).style.backgroundColor = "red"
    }

    

    

}

function toggleBackground() {
    document.getElementsByTagName("header")[0].style.opacity = 1;
    document.getElementById("myAddBook").style.opacity = 1;
    document.getElementById("bookHolder").style.opacity = 1;
}


function myCancel(){

    if (document.getElementById("alreadyRead")) {
        document.getElementById("alreadyRead").remove()
    }

    document.getElementById("bookTitle").value = ""
    document.getElementById("bookAuthor").value = ""
    document.getElementById("numberOfPages").value = ""
    document.getElementById("read").checked = false
    document.getElementById("myForm").style.display = "none"
    toggleBackground()
}


function closeForm(event){
    event.preventDefault();
    // style changes
    document.getElementById("myForm").style.display = "none";
    document.getElementsByTagName("header")[0].style.opacity = 1;
    document.getElementById("myAddBook").style.opacity = 1;
    document.getElementById("bookHolder").style.opacity = 1;
    // retrieve information
    let myBookTitle = document.getElementById("bookTitle").value
    let myBookAuthor = document.getElementById("bookAuthor").value
    let myNumberOfPages = document.getElementById("numberOfPages").value
    let myRead;
    if (document.getElementById("read").checked == true){
        myRead = "Read";
    } else {
        myRead = "Not Read";
    }

    let currentBook = new Book(myBookTitle, myBookAuthor, myNumberOfPages, myRead);
    
    myLibrary.push(currentBook)
    
    if (document.getElementById(currentBook.title)){
        if (document.getElementById("alreadyRead")){
            openForm()
        } else {
            document.getElementById("myForm").insertAdjacentHTML("beforeend", "<p id='alreadyRead'> This book has already been added </p>")
            openForm()
        }
    } else {
        if (document.getElementById("bookTitle").value != ""){
            createBookCard(currentBook)
            document.getElementById("bookTitle").value = ""
            document.getElementById("bookAuthor").value = ""
            document.getElementById("numberOfPages").value = ""
            document.getElementById("read").checked = false
            document.getElementById("alreadyRead").remove()
            console.log("This is Working")
        } else {
            openForm()
        }
    }
    
    console.log(myLibrary)
    

}

