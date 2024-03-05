const h1 = document.querySelector("#title");
const alert = document.createElement("div");

const inputForm = document.querySelector("#book-input");
const bookName = inputForm.querySelector("#book-name");
const author = inputForm.querySelector("#author");
const bookList = document.querySelector(".book-list");

const submitBtn = document.querySelector("#submit-btn");

let books = [];
alert.id = "alert";
h1.appendChild(alert);
alert.style.display = "none";
let notificationTimeout;

const customAlert = (keyword) => {
  //add
  if (keyword === "add") {
    alert.textContent = "책이 추가되었습니다.";
    alert.style.backgroundColor = "green";
  }
  //delete
  else if (keyword === "delete") {
    alert.textContent = "책이 삭제되었습니다.";
    alert.style.backgroundColor = "red";
  }
  //alert
  else if (keyword === "input-err") {
    alert.textContent = "책 이름 혹은 저자 이름을 입력하지 않았습니다.";
    alert.style.backgroundColor = "orange";
  }
  alert.style.display = "block";
  clearTimeout(notificationTimeout);
  notificationTimeout = setTimeout(() => {
    alert.style.display = "none";
  }, 3000);
};

const deleteBook = (event) => {
  const li = event.target.parentNode;
  li.parentNode.removeChild(li);
  books = books.filter((book) => book.bookName !== li.textContent);
  customAlert("delete");
};

const showBook = (bookObj) => {
  const li = document.createElement("li");
  const abook = document.createElement("span");
  const authorName = document.createElement("span");
  const deleteBtn = document.createElement("button");

  deleteBtn.classList.add("delete-btn");

  abook.textContent = bookObj.bookName;
  authorName.textContent = bookObj.author;

  abook.classList.add("book-name");
  authorName.classList.add("author-name");

  deleteBtn.textContent = "x";
  deleteBtn.addEventListener("click", deleteBook);

  li.appendChild(abook);
  li.appendChild(authorName);
  li.appendChild(deleteBtn);
  bookList.appendChild(li);
};

const clickAdd = () => {
  const book = {
    bookName: bookName.value,
    author: author.value,
  };
  if (book.bookName === "" || book.author === "") {
    customAlert("input-err");
  } else {
    showBook(book);
    bookName.value = "";
    author.value = "";
    books.push(book);
    customAlert("add");
  }
};

submitBtn.addEventListener("click", clickAdd);
