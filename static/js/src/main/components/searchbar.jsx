import React, {Component}  from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

class SearchBar extends Component{
   constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

   handleChange(event) {
    this.setState({value: event.target.value});
   }

   handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

   render() {
      return (
         <form onSubmit={this.handleSubmit}>
            <input placeholder='Search a company...' type="text" value={this.state.value} onChange={this.handleChange} required/>
            <input type="submit" value="Submit" />
         </form>
      );
   }
};


export default SearchBar;
