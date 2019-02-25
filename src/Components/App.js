import React, { Component } from 'react';
import SearchBar from './SearchBar';

const APIKey = 'AIzaSyB7UAb6EhKjOvZWbSnTzIb43wOsV7fPDZA';


class App extends Component {
  // constructor(props){
  //   super(props);
    // this.props = {
    //   books: []
    // }
  // };

  // onSearchTermChange(term) {

  // }
  render() {
    return (
      <div className="App">
        <h1>Book Finder</h1>
          <SearchBar />
      </div>
    );
  }
}

export default App;
