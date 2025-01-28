function Book(title, author, pages, readFlag) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.readFlag = readFlag;
  this.info = function () {
    return `${this.title} by ${this.author}, ${pages}, ${
      this.readFlag ? "Read" : "not Read"
    } `;
  };
} //constructor function

const myLibary = [];

function addBookToLibrary(title, author, pages, readFlag) {
  let book = new Book(title, author, pages, readFlag);
  myLibary.push(book);
}

//add books to myLibrary Array start
addBookToLibrary("THE MONK WHO SOLD HIS FERRARI", "ROBIN SHARMA", 225, true);
addBookToLibrary("PARADISE LOST", "MILTON, JOHN", 199, true);
addBookToLibrary("THE BEST OF RUSKIN BOND", "RUSKIN BOND", 499, false);
addBookToLibrary("THE DEFINITIVE KAHLIL GIBRAN", "KHALIL GIBRAN", 395, false);
addBookToLibrary(
  "WINGS OF FIRE  An Autobiography",
  "ABDULKALAM A P J",
  450,
  false
);
addBookToLibrary("MEIN KAMPF", "ADOLF HITLER", 250, false);
//add books to myLibrary Array end

function showBooks(myLibary) {
  myLibary.forEach((book) => {
    let container = document.querySelector(".books-container");
    let item = document.createElement("div");

    let title = document.createElement("h2");
    let author = document.createElement("h3");
    let pages = document.createElement("p");
    let readFlag = document.createElement("p");

    item.classList.add("book");
    title.classList.add("title");
    author.classList.add("author");
    pages.classList.add("pages");
    readFlag.classList.add("readStatus");

    title.textContent = book.title;
    author.textContent = book.author;
    pages.textContent = book.pages;
    readFlag.textContent = book.readFlag ? "Read" : "Not Read";

    item.append(title);
    item.append(author);
    item.append(pages);
    item.append(readFlag);

    container.append(item);
  });
}
showBooks(myLibary);
