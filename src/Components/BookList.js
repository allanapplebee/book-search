import React from 'react';

const BookList = ({books}) => {
    if(!books) {
        return <div>Nothing here - try searching for a book!</div>
    }

    else {
        return (  
            <div>
            
                {books.map(book =>
                // <li key={book.id}>
                    // <div>
                        <div key={book.id} className="col-sm-6">
                            <div className="card">
                            <img className="card-img-top" alt="book cover" src={'imageLinks' in book.volumeInfo ? book.volumeInfo.imageLinks.thumbnail : null} />
                            <div className="card-body">
                                <h5 className="card-title">{book.volumeInfo.title}</h5>
                                <p className="card-text">By: {'authors' in book.volumeInfo ? book.volumeInfo.authors : 'Unknown'}</p>
                                <p className="card-text">Published by: {'publisher' in book.volumeInfo ? book.volumeInfo.publisher : 'Unknown'}</p>
                                <a href="{book.volumeInfo.previewLink}" className="btn btn-primary">See this book</a>
                            </div>
                            </div>
                        </div>
                    // </div>
            
                    // <div>
                        // <img alt="book cover" src={'imageLinks' in book.volumeInfo ? book.volumeInfo.imageLinks.thumbnail : 'https://upload.wikimedia.org/wikipedia/en/f/f9/No-image-available.jpg'} />
                        // <p>{book.volumeInfo.title}</p>
                        // <p>By: {'authors' in book.volumeInfo ? book.volumeInfo.authors : 'Unknown'}</p>
                        // <p>Published by: {'publisher' in book.volumeInfo ? book.volumeInfo.publisher : 'Unknown'}</p>
                        // <a className="btn btn-primary" href={book.volumeInfo.previewLink}>See this book</a>
                    // </div>
                    // </li>
                )};
            </div>
        )
    }
}
export default BookList;