import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore } from 'redux';
import { AppContainer } from 'react-hot-loader';
import Bullshit from './components/bullshit';

import reducer from './reducers';

const store = createStore(reducer);
ReactDOM.render(
  <AppContainer>
    <Bullshit />
  </AppContainer>,
  document.getElementById('react-root')
);
