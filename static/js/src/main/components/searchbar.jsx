import React, {Component}  from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { post } from '../actions/bullshit';

@connect((state) =>{
  return {
    site: state.site
  };
})
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
         <form id="searchForm" onSubmit={this.handleSubmit}>
            <input id="searchBox" placeholder='Search a company...' type="text" value={this.state.value} onChange={this.handleChange} required/>
            <input id="searchButton" type="submit" value="Submit" />
         </form>
      );
   }
};




export default SearchBar;
