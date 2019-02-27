import React from 'react';

const BookList = ({books}) => {
    if(!books) {
        return <div>Nothing here - try searching for a book!</div>
    }

    else {
        return (  
            <ul>
                {books.map(book =>
                <li key={book.id}>
                    <div>
                        <img alt="book cover" src={'imageLinks' in book.volumeInfo ? book.volumeInfo.imageLinks.thumbnail : 'https://upload.wikimedia.org/wikipedia/en/f/f9/No-image-available.jpg'} />
                        <p>{book.volumeInfo.title}</p>
                        <p>By: {'authors' in book.volumeInfo ? book.volumeInfo.authors : 'Unknown'}</p>
                        <p>Published by: {'publisher' in book.volumeInfo ? book.volumeInfo.publisher : 'Unknown'}</p>
                        <a className="btn btn-primary" href={book.volumeInfo.previewLink}>See this book</a>
                    </div>
                </li>
                )};
            </ul>
        )
    }
}
export default BookList;