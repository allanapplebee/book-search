import React from 'react';

const BookList = props =>
<ul>
    {props.books.map(book =>
    <li key={book.id}>
        <div>
            <img src={book.volumeInfo.imageLinks.thumbnail} />
            <p>{book.volumeInfo.title}</p>
        </div>
    </li>
    )}
</ul>
export default BookList;