let AddBook = document.querySelector("#AddBookBtn");
let closeForm = document.querySelector(".close-form");
let formShow = document.querySelector("#BookInfo");
let deleteAllbooks = document.querySelector("#DeleteAllBooks");
let bookCard = document.querySelector("#bookCard");
let bookAdded = document.querySelector(".bookAdded");
const bookNameInput = document.querySelector("#book-form-name");
const authorInput = document.querySelector("#book-form-author");
const pagesInput = document.querySelector("#book-form-pages");
const submitButton = document.querySelector(".bookAdded");
const readStatus = document.querySelector(".ReadStatus");

const Book = [];
bookAdded.addEventListener("click", () => {
  if (
    bookNameInput.value.trim() !== "" &&
    authorInput.value.trim() !== "" &&
    pagesInput.value.trim() !== ""
  ) {
    // Create a new book object and store the information
    const newBook = {
      title: bookNameInput.value.trim(),
      author: authorInput.value.trim(),
      pages: parseInt(pagesInput.value.trim()),
      IsRead: readStatus.value,
    };

    // Add the new book to the books array
    Book.push(newBook);
    // Create the card for the new book
    const newDiv = document.createElement("div");
    newDiv.classList.add("card");

    // Disable the "Submit" button again after card creation
    submitButton.disabled = true;
    formShow.style.display = "none";
    submitButton.disabled = false;
    //Shows Input value in card
    const bookName = document.createElement("p");
    bookName.textContent = `"${newBook.title}"`;
    bookName.style.fontSize = "30px"

    const bookAuthor = document.createElement("p");
    bookAuthor.textContent = ` by '${newBook.author}'`;
    bookAuthor.style.fontFamily="san"
    bookAuthor.style.fontSize = "1.5rem"
    
    const bookPages = document.createElement("p");
    bookPages.textContent = `${newBook.pages} pages`;
    bookPages.style.fontSize = "1rem"

    const buttonDiv = document.createElement("div");



    // Append the paragraphs and buttonsDiv to the newDiv
    newDiv.appendChild(bookName);
    newDiv.appendChild(bookAuthor);
    newDiv.appendChild(bookPages);
    newDiv.appendChild(buttonDiv);

    bookCard.appendChild(newDiv);

    //Creates The Button and Classes and Text
    const readBtn = document.createElement("button");
    readBtn.textContent = "Read";
    readBtn.classList.add("IsRead");

    const removeBook = document.createElement("button");
    removeBook.textContent = "Remove Book";
    removeBook.classList.add("removeBook");

    //Append the  Buttons to the buttonsDiv
    buttonDiv.appendChild(readBtn);
    buttonDiv.appendChild(removeBook);

    // Clear the input fields after card creation
    bookNameInput.value = "";
    authorInput.value = "";
    pagesInput.value = "";
    //Remove Card

    removeBook.addEventListener("click", (event) => {
      if (event.target.classList.contains("removeBook")) {
        const cardToRemove = event.target.parentElement.parentElement;
        bookCard.removeChild(cardToRemove);
      }
    });
    //set the initial value for readBtn
    const isReadValue = document.querySelector("#IsRead").value;

    if (isReadValue === "Read") {
      readBtn.classList.add("light-green");
      readBtn.textContent = "Read";
    } else if (isReadValue === "Unread") {
      readBtn.classList.add("light-red");
      readBtn.textContent = "Not Read";
    }

    // Check Read Status
    readBtn.addEventListener("click", () => {
      if (newBook.IsRead === "Read") {
        readBtn.classList.remove("light-red");
        readBtn.classList.add("light-green");
        readBtn.textContent = "Read";
        newBook.IsRead = "Unread";
      } else if (newBook.IsRead === "Unread") {
        readBtn.classList.remove("light-green");
        readBtn.classList.add("light-red");
        readBtn.textContent = "Not Read";
        newBook.IsRead = "Read";
      }
    });
  }
});

closeForm.addEventListener("click", () => {
  formShow.style.display = "none";
});

AddBook.addEventListener("click", () => {
  formShow.style.display = "flex";
});

deleteAllbooks.addEventListener("click", () => {
  const allCards = document.querySelectorAll(".card");

  allCards.forEach((card) => {
    bookCard.removeChild(card);
  });
});

