import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';

import SearchBar from './searchbar';
import Results from './results';
import Particles from 'react-particles-js';



const Bullshit = () => {
   return (
      <div id="mainDiv">
        <div id="particles">  <Particles /> </div>
         <div id="header">
            <h1> how bullsh*t is your website? </h1>
         </div>
         <SearchBar id="searchbar" />
         <br/>
         <Results />
      </div>
   );
};

export default Bullshit;
