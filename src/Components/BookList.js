import React from 'react';

const BookList = ({books}) => {

    if(!books) {
        return <div>Nothing here, try searching for a book!</div>
    }

    else {
        return(
            <div className="row">
                {books.map(book =>
                        <div key={book.id} className="col-sm-4 py-2">
                            <div className="card">
                            <img className="card-img-top" alt="book cover" src={'imageLinks' in book.volumeInfo ? book.volumeInfo.imageLinks.thumbnail : "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/480px-No_image_available.svg.png"} />
                            <div className="card-body">
                                <h5 className="card-title">{book.volumeInfo.title}</h5>
                                <p className="card-text">By: {'authors' in book.volumeInfo ? book.volumeInfo.authors : 'Unknown'}</p>
                                <p className="card-text">Published by: {'publisher' in book.volumeInfo ? book.volumeInfo.publisher : 'Unknown'}</p>
                                <a href={book.volumeInfo.canonicalVolumeLink} className="btn btn-primary">See this book</a>
                            </div>
                            </div>
                        </div>
                    )
                }
            </div>
        )
    }
}
export default BookList;