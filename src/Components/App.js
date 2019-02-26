import React, { Component } from 'react';
import SearchBar from './SearchBar';
import BookList from './BookList';

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

  performSearch = (query = 'Harry Potter') => {
    fetch(`${URL}${query}+key=${APIKey}`)
    .then(response => response.json())
      .then(responseData => {
        this.setState({
          books: responseData,
        });
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });
  }

  render() {
    return (
      <div className="App">
        <h1>Book Finder</h1>
          <SearchBar onSearch={this.performSearch}/>
          <div>
            <BookList books={this.state.books}/>
          </div>
      </div>
    );
  }
}

export default App;
