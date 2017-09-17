import React, {Component}  from 'react';
import ReactDOM from 'react-dom';
import { Provider, connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { post } from '../actions/bullshit';

@connect((state) =>{
  return {
    site: state.site
  };
})
class SearchBar extends Component{
   state = {
      url:'',
      score: 0
   }
   constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleSubmit = this.handleSubmit.bind(this);
  }

   handleSubmit(value) {
      console.log(post('https://google.com'));
      // post(this.state.value);
      // this.setState({ url: value });
  }

  componentDidMount() {
        const {dispatch, params: {url}} = this.props;
        dispatch(post(url));
     }

   render() {
      const {url} = this.props;
      return (
         <form id="searchForm" onSubmit={this.handleSubmit(this.formSubmit)}>
            <input id="searchBox" placeholder='Enter url...' type="text" value={this.state.value} required/>
            <button id="searchButton" type="submit">Scan</button>
         </form>
      );
   }
};




export default SearchBar;
