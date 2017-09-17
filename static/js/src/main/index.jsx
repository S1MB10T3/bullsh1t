import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import { Provider } from 'react-redux'
import Bullshit from './components/bullshit';

import reducer from './reducers';

import reduxThunk from "redux-thunk";
import promise from "redux-promise-middleware";
import Particles from 'react-particles-js';

const middleware = applyMiddleware(promise(), reduxThunk, logger);


const store = createStore(reducer, middleware);
ReactDOM.render(
  <Provider store={store}>
    <Bullshit />
  </Provider>,
  document.getElementById('react-root')
);
