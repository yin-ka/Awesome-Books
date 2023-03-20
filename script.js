var listBooks = [
    {
        title: "Lorem Ipsum",
        author: "Testero Testyy",
    },
    {
        title: "Second Book",
        author: "Testero Testyy",
    },
]

function addBooks (title, author) {
    listBooks.push({
        title,
        author,
    })
}

displayBooks (listBooks);

function displayBooks (listBooks){
const bookSection = document.querySelector('.books');
bookSection.innerHTML = listBooks.map((book, index) => `
<div>
<p>${book.title}</p>
        <p>${book.author}</p>
        <button type="button" onclick="removeBooks(${index})">remove</button>
        <hr>
        </div>
        `).join('');

}

function removeBooks (index) {
    listBooks.splice(index, 1)

    displayBooks (listBooks);
}

function logSubmit(event) {
    const bookTitle = document.querySelector('#book-title').value;
    const bookAuthor = document.querySelector('#book-author').value;

    addBooks (bookTitle, bookAuthor)
    displayBooks (listBooks)

    event.preventDefault();
  }