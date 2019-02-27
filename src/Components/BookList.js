import React from 'react';

const BookList = ({books}) => {
if(!books || books === []) {
    return <div>No books found, please try again</div>
}
else {
return (
<ul>
    {books.map(book =>
    <li key={book.id}>
        <div>
            <img alt="book cover" src={book.volumeInfo.imageLinks.thumbnail} />
            <p>{book.volumeInfo.title}</p>
            <p>By: {book.volumeInfo.authors}</p>
            <p>Published by: {book.volumeInfo.publisher}</p>
            <a className="btn btn-primary" href={book.volumeInfo.previewLink}>See this book</a>
        </div>
    </li>
    )};
</ul>)}}
export default BookList;