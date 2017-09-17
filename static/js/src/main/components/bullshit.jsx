import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';

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
