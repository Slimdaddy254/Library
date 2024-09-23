// Array to store book objects
const myLibrary = [];

// Book constructor
function Book(title, author, pages, isRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
}

// Function to add a new book to the library array
function addBookToLibrary(event) {
  event.preventDefault(); // Prevent form from submitting and reloading the page

  // Get form values
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const pages = document.getElementById("pages").value;
  const isRead = document.getElementById("isRead").checked;

  // Create a new Book object
  const newBook = new Book(title, author, pages, isRead);

  // Add the book to the library array
  myLibrary.push(newBook);

  // Reset the form
  document.getElementById("bookForm").reset();

  // Hide the form after submission
  document.getElementById("bookForm").style.display = "none";

  // Display the books
  displayBooks();
}

// Function to display books on the page
function displayBooks() {
  const libraryContainer = document.getElementById("library");
  libraryContainer.innerHTML = ""; // Clear the current display

  myLibrary.forEach((book, index) => {
    const bookCard = document.createElement("div");
    bookCard.classList.add("book-card");

    bookCard.innerHTML = `
      <h2>${book.title}</h2>
      <p>Author: ${book.author}</p>
      <p>Pages: ${book.pages}</p>
      <p>Status: ${book.isRead ? "Read" : "Not Read"}</p>
      <button onclick="toggleReadStatus(${index})">${book.isRead ? "Mark as Unread" : "Mark as Read"}</button>
      <button onclick="removeBook(${index})">Remove Book</button>
    `;

    libraryContainer.appendChild(bookCard);
  });
}

// Function to remove a book
function removeBook(index) {
  myLibrary.splice(index, 1);
  displayBooks();
}

// Function to toggle read status
function toggleReadStatus(index) {
  myLibrary[index].isRead = !myLibrary[index].isRead;
  displayBooks();
}

// Event listener to handle form submission
document.getElementById("bookForm").addEventListener("submit", addBookToLibrary);

// Event listener for the "NEW BOOK" button to show the form
document.getElementById("newBookBtn").addEventListener("click", () => {
  document.getElementById("bookForm").style.display = "block";
});
