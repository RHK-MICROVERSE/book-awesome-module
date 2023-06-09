import Book from './modules/SingleBook.js';
import BookCRUD from './modules/BookStore.js';
import Interface from './modules/BookInterface.js';
import { onlyDisplayBook, onlyDisplayInputBook, onlyDisplayContact } from './modules/functions.js';
// import { DateTime } from './node_modules/luxon/src/luxon.js';
import displayDateTime from './modules/DisplayDate.js';

document.addEventListener('DOMContentLoaded', Interface.renderBooks);

const addForm = document.getElementById('add-form');
const titleInput = document.getElementById('book-title');
const authorInput = document.getElementById('book-author');

addForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const title = titleInput.value;
  const author = authorInput.value;
  const book = new Book(title, author);
  if (title && author) {
    BookCRUD.createBook(book);
    Interface.renderBooks();
    addForm.reset();
  }
});

const bookList = document.getElementById('book-list');

bookList.addEventListener('click', (e) => {
  if (e.target.matches('.rm-btn')) {
    const bookIndex = e.target.dataset.index;
    BookCRUD.removeBook(bookIndex);
    Interface.renderBooks();
  }
});

document.getElementById('datetime').innerHTML = displayDateTime();

document.querySelector('.list').addEventListener('click', onlyDisplayBook);
document.querySelector('.add').addEventListener('click', onlyDisplayInputBook);
document.querySelector('.contact').addEventListener('click', onlyDisplayContact);

window.onload = () => {
  onlyDisplayBook();
};
