import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props) {
      super(props);
      this.state = {
        value: '',
        };

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.onSearch(this.query.value);
        this.setState({value: ''});
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }
  
    render() {
      return (
        <div className="search-bar">
          <form onSubmit={this.handleSubmit} className="form-inline">
            <input
                type="text"
                value={this.state.value}
                ref={(input) => this.query = input}
                placeholder="Search for books..."
                onChange={this.handleChange} 
                className="form-control mr-sm-2"/>
            <button type="submit" className="btn btn-primary my-2 my-sm-0">Search</button>
          </form>
          <div>{this.props.msg}</div>
        </div>

      );
    }
}

  export default SearchBar;