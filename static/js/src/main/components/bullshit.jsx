import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';

import { get } from '../actions/bullshit'

import SearchBar from './searchbar';
import Results from './results';


const Bullshit = () => {
   return (
      <div id="mainDiv">
         <div id="header">
            <img src="/static/img/logo.JPG" alt="Bullshit Logo" height="100"></img>
            <h1> how bullsh*t is your website? </h1>
         </div>
         <SearchBar id="searchbar" />
         <br/>
         <Results />
      </div>
   );
};

export default Bullshit;
