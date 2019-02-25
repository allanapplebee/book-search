import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        alert(this.state.value)
        event.preventDefault();
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }
  
    render() {
      return (
        <div className="search-bar">
          <form onSubmit={this.handleSubmit}>
            <input
                type="text"
                value={this.state.value}
                placeholder="Search for books..."
                onChange={this.handleChange} />
            <button type="submit">Search</button>
          </form>
        </div>
      );
    }
}

  export default SearchBar;