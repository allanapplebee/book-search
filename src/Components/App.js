import React, { Component } from 'react';
import SearchBar from './SearchBar';
// import BookList from './BookList';

const APIKey = 'AIzaSyB7UAb6EhKjOvZWbSnTzIb43wOsV7fPDZA';
const URL = 'https://www.googleapis.com/books/v1/volumes?q=';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      books: []
    }
  };

  componentDidMount() {
    this.performSearch();
  }

  performSearch = (query = 'harry potter') => {
    fetch(`${URL}${query}+key=${APIKey}`)
    .then(response => response.json())
      .then(data => {
        this.setState({
          books: data.items,
        });
      console.log(this.state)
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });
  }

  render() {
    const { books } = this.state;
    return (
      <div className="App">
        <h1>Book Finder</h1>
          <SearchBar onSearch={this.performSearch}/>
          <ul>
            {books.map(book =>
              <li key={book.id}>
                <h1>{book.id}</h1>
              </li>
            )}
          </ul>
      </div>
    );
  }
}

export default App;
