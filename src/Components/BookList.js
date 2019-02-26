import React from 'react';

const BookList = props =>
<ul>
    {props.books.map(book =>
    <li key={book.id}>
        <h1>{book.id}</h1>
    </li>
    )}
</ul>
export default BookList;