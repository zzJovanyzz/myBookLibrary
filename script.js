/*
    Object Constructor for a book
*/
function Book (title, author, pages, read){
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = function() {
        console.log(`${title} by ${author}, ${pages} pages, ${read}`)
        return `${title} by ${author}, ${pages} pages, ${read}`
    }
}

