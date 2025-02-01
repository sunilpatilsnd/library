function Book(title, author, pages, readFlag) {
  this.title = title.toUpperCase();
  this.author = author.toUpperCase();
  this.pages = pages;
  this.readFlag = readFlag;
  this.info = function () {
    return `${this.title} by ${this.author}, ${pages}, ${
      this.readFlag ? "Read" : "not Read"
    } `;
  };
  this.toggleRead = function () {
    this.readFlag = !this.readFlag;
    return this.readFlag;
  };
} //constructor function

const myLibary = [];

function addBookToLibrary(title, author, pages, readFlag) {
  const book = new Book(title, author, pages, readFlag);
  myLibary.unshift(book);
  showBooks(myLibary);
}

function deleteBook(e) {
  const deleteID = e.target.dataset.bookid;
  myLibary.splice(deleteID, 1);
  showBooks(myLibary);
}

function toggleReadStatus(e) {
  const toggleReadID = e.target.dataset.bookid;
  myLibary[toggleReadID].toggleRead();
  showBooks(myLibary);
}

function noBooks() {
  const container = document.querySelector(".books-container");
  const noBookTxt = document.createElement("h1");
  noBookTxt.textContent = `There are no books to display here`;
  container.append(noBookTxt);
}

function showBooks(myLibary) {
  const container = document.querySelector(".books-container");

  while (container.firstChild) {
    // empties the book container when new book is added or removed
    container.removeChild(container.firstChild);
  }

  if (myLibary.length == 0) {
    debugger;
    noBooks();
  }

  myLibary.forEach((book, index) => {
    //iterate through myLibrary Array and show the content in dom
    const container = document.querySelector(".books-container");

    const item = document.createElement("div");

    const title = document.createElement("h2");
    const author = document.createElement("h3");
    const pages = document.createElement("p");
    const readFlag = document.createElement("p");
    const deleteBookBtn = document.createElement("button"); //delete button
    const toggleRead = document.createElement("button"); //toggle Read Button

    item.classList.add("book");
    title.classList.add("title");
    author.classList.add("author");
    pages.classList.add("pages");
    readFlag.classList.add("readStatus");

    if (book.readFlag == true) {
      readFlag.classList.add("green");
    } else {
      readFlag.classList.add("red");
    }

    deleteBookBtn.dataset.bookid = index; //array index set as unique identifier
    toggleRead.dataset.bookid = index;

    deleteBookBtn.classList = "deleteBtn";
    toggleRead.classList = "toggleReadBtn";

    title.textContent = book.title;
    author.textContent = book.author;
    pages.textContent = book.pages + " Pages";
    readFlag.textContent = book.readFlag ? "Read" : "Not Read";

    item.append(title);
    item.append(author);
    item.append(pages);
    item.append(readFlag);
    item.append(deleteBookBtn);
    item.append(toggleRead);

    container.append(item);

    //delete button added for each book
    deleteBookBtn.addEventListener("click", (e) => {
      deleteBook(e);
    });
    toggleRead.addEventListener("click", (e) => {
      toggleReadStatus(e);
    });
  });
}

showBooks(myLibary); //show books on first load

//Adding addBook functionality

const dialog = document.querySelector("dialog");
const showFormBtn = document.querySelector("#openForm");
const closeFormBtn = document.querySelector("#closeForm");

showFormBtn.addEventListener("click", () => {
  dialog.showModal();
});

closeFormBtn.addEventListener("click", () => {
  dialog.close();
});

// Adding Book details to add book array from
const addBookBtn = document.querySelector("#addBookForm");
addBookBtn.addEventListener("submit", (e) => {
  e.preventDefault();
  processFormData();
});

function processFormData() {
  const title = document.querySelector("input[name='title']");
  const author = document.querySelector("input[name='author']");
  const pages = document.querySelector("input[name='pages']");
  const readFlag = document.querySelector("input[name='readFlag']:checked");
  const readBool = readFlag.value == "read" ? true : false;

  addBookToLibrary(title.value, author.value, pages.value, readBool);

  document.querySelector("form").reset(); //resets the form input fields
  document.querySelector("dialog").close(); //closes the dialouge
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
