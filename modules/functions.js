let onlyDisplayBook = () => {
  document.getElementById('display-books').style.display = 'unset';
  document.getElementById('separation-book-form').style.display = 'none';
  document.getElementById('input-book').style.display = 'none';
  document.getElementById('contact').style.display = 'none';
}

let onlyDisplayInputBook = () => {
  document.getElementById('input-book').style.display = 'unset';
  document.getElementById('display-books').style.display = 'none';
  document.getElementById('separation-book-form').style.display = 'none';
  document.getElementById('contact').style.display = 'none';
}

let onlyDisplayContact = () => {
  document.getElementById('contact').style.display = 'unset';
  document.getElementById('display-books').style.display = 'none';
  document.getElementById('separation-book-form').style.display = 'none';
  document.getElementById('input-book').style.display = 'none';
}


export { onlyDisplayBook, onlyDisplayInputBook, onlyDisplayContact };
