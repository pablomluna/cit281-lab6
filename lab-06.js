class Book {
  constructor(titleofBook, authorofBook, pubDateofBook, isbn) {
    this.title = titleofBook;
    this.author = authorofBook;
    this.pubDate = pubDateofBook;
    this.isbn = isbn;
  }
}

class Library {
  constructor(name) {
    this._name = name;
    this._books = [];
  }
  get books() {
    // Return copy of books
    return JSON.parse(JSON.stringify(this._books));
  }
  get count() {
    return this._books.length;
  }
  addBook(book = {}) {
    const { title = "", author = "", pubDate = "", isbn = "" } = book;
    if (title.length > 0 && author.length > 0) {
      const newBook = { title, author, pubDate, isbn };
      this._books.push(newBook);
    }
  }

  deleteBook(isbn) {
    // (1) Find the index of the book with the given isbn within the "_books" array
    let indexofBookToRemove = null;

    for (let index = 0; index < this._books.length; index++) {
        const book = this._books[index]; 
        if (book.isbn == isbn) {
        indexofBookToRemove = index; 
        break;
    }

    }
    /*

      variable = null 
      loop(for/while){
          filtering (if) {
              modify/update variable 

              (potentially -- but not necesarily -- exit the loop early)


          }
      }
      // variable is ready to go 

      */

    // (2) Once the index has been found, remove the entry from "_books"
    this._books.splice(indexofBookToRemove);
  }

  listBooks() {
    for (const book of this._books) {
      const { title, author, pubDate, isbn } = book;
      console.log(
        `Title: ${title}, Author: ${author}, PubDate: ${pubDate}, ISBN: ${isbn}`
      );
    }
  }
}

const myBook = new Book(
  "AP Calc Crash Course",
  "Banu et al.",
  "11/23/2013",
  "430945454"
);
// Create a book
const atomicHabits = new Book(
  "Atomic Habits",
  "James Clear",
  "10/16/2018",
  "12345678"
);
const theIncidents = new Book(
  "The Incidents",
  "Harvard Co.",
  "6/16/2019",
  "87654321"
);
const pyrexVision = new Book(
  "Pyrex Vision",
  "Virgil Abloh",
  "4/21/2020",
  "2034348394"
);

let uoLibrary = new Library("Knight Library");
console.log("adding");
uoLibrary.addBook(myBook);
uoLibrary.addBook(atomicHabits);
uoLibrary.addBook(theIncidents);
uoLibrary.addBook(pyrexVision);

uoLibrary.listBooks();
console.log("deleting");
uoLibrary.deleteBook("12345678");
uoLibrary.listBooks();
