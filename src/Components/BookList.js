import React from 'react';

const BookList = props => 

<ul>
    {props.books.map((book, index) =>
        <li key={index}>
            <p>{book.books.items.volumeInfo.title}</p>
            <img src={book.books.items.volumeInfo.imageLinks.thumbnail} key={book.id} />
        </li>
    )}
</ul>;

export default BookList;