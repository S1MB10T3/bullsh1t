import React, {Component}  from 'react';
import ReactDOM from 'react-dom';
import { Provider, connect } from 'react-redux';
import { post } from '../actions/bullshit';


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
      //  const {dispatch, params: {url}} = this.props;
      //  dispatch(post(this.state.value));
       alert(post(this.state.value));
     }

   render() {
      post('https://google.com');

      return (
         <form id="searchForm" onSubmit={this.handleSubmit}>
            <input id="searchBox" placeholder='enter url...' type="text" value={this.state.value} onChange={this.handleChange} required/>
            <input id="searchButton" type="submit" value="Submit" />
         </form>
      );
   }
};

export default SearchBar;
