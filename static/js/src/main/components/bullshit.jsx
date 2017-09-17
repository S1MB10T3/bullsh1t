import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';

import { get } from '../actions/bullshit'

import SearchBar from './searchbar';
import Results from './results';


const Bullshit = () => {
   return (
      <div>
         <SearchBar />
         <br/>
         <Results />
      </div>
   );
};

export default Bullshit;
