class Library{
    constructor(name){
        this.name = name;
        this.books = [];
    }

    addBook(book){
        this.books.push(book);
        console.log(`Book ${book} added to ${this.name}`);
    }
    
    removeBook(book){
        const index = this.books.indexOf(book);
        if (index !== -1) {
            this.books.splice(index, 1);
            console.log(`Book ${book} removed from ${this.name}`);
        } else {
            console.log(`Book ${book} does not exist in ${this.name}`);
        }
    }

    displayBooks(){
        console.log(`Books in ${this.name}`);
        if (this.books.length > 0) {
            for (let i=0; i<this.books.length; i++){
                console.log(`${i+1}. ${this.books[i]}`);
            }
        } else {
            console.log('No books available.')
        }
        

    }
}

const library = new Library("JS library");

library.displayBooks();

library.addBook("Javascript: The Definitive Guide - David Flanagan");

library.addBook("You don`t know JS - Kyle Simpson");

library.addBook("Eloquent JavaScript, 4th Edition - Marijn Haverbeke");

library.displayBooks();

library.removeBook("Javascript: The Definitive Guide - David Flanagan");

library.displayBooks();