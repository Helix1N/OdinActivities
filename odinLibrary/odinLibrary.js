let myLibrary = [];
function Book() {
    let name;
    let pages;
    let read;
}
let count = 2;


let book1 = new Book;
book1.name = "Atrius";
book1.pages = 500;

const book2 = new Book;
book2.name = "Perseu";
book2.pages = 450;

function displayBooks() {
    divlul.textContent = '';
    myLibrary.forEach( function (element) {
        let plul = document.createElement("p");
        let deltoid = document.createElement("button");
        let readButton = document.createElement("button");
        plul.textContent = (`Nome do livro: ${element.name}. Total de páginas: ${element.pages}\n`);
        deltoid.textContent = "Delete";
        readButton.textContent = "Read";
        readButton.className = "red";
        deltoid.addEventListener("click", deleteBook);
        readButton.addEventListener("click", readOrNot)
        divlul.appendChild(plul);
        plul.appendChild(deltoid);
        plul.appendChild(readButton);
        plul.className = element.name;
    })
}

function readOrNot() {
    const buttonClasses = this.classList;
    buttonClasses.toggle("green");
}

function deleteBook() {
    let thisButton = this;
    
    myLibrary.forEach( function (element) {
        if (thisButton.parentNode.className == element.name) {
            let indexElement = myLibrary.indexOf(element);
            console.log(indexElement);
            myLibrary.splice(indexElement,1);
        }
        displayBooks();
    })

}

function addBookToLibrary(name2,pages2) {
    let book = new Book;
    book.name = name2;
    book.pages = pages2;
    myLibrary.push(book);
}
function removeBookFromLibrary(name2) {
    myLibrary.forEach(element => { 
        if (element.name == name2) {
            //console.log("Entrou no if");
            //console.log(element);
            let indexElement = myLibrary.indexOf(element);
            console.log(indexElement);
            myLibrary.splice(indexElement,1);
        }
        
    });
}
const divlul = document.getElementById("container");
const addBooks = document.getElementById("add");
const removeBooks = document.getElementById("remove");

function globalFunction2() {
    let book3 = window.prompt("What book you want to remove? Name: ");
    removeBookFromLibrary(book3);
    displayBooks();
}

function globalFunction(receive) {
    let name3 = window.prompt("Qual o nome do livro? ");
    let pages3 = window.prompt("Quantas pags tem o livro? ");
    addBookToLibrary(name3,pages3);
    displayBooks();
}

removeBooks.addEventListener("click", globalFunction2);
addBooks.addEventListener("click", globalFunction);

console.log(divlul);





myLibrary[0] = book1;
myLibrary[1] = book2;
addBookToLibrary("George", 250);
addBookToLibrary("Farquad", 240);
addBookToLibrary("Grimbeldor", 560);

removeBookFromLibrary("Farquad");
console.log(myLibrary);

displayBooks();