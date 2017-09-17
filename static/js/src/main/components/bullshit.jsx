import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import SearchBar from './searchbar';
import BullshitScore from './bullshitscore';


const Bullshit = () => {
   return (
      <div>
         <SearchBar />
         <br/>
      </div>
   );
};

export default Bullshit;
