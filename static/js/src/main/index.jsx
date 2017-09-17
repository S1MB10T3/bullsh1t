import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import { Provider } from 'react-redux'
import Bullshit from './components/bullshit';

import reducer from './reducers';

import reduxThunk from "redux-thunk";
import promise from "redux-promise-middleware";

const middleware = applyMiddleware(promise(), reduxThunk, createLogger());


const store = createStore(reducer, middleware);
ReactDOM.render(
  <Provider store={store}>
    <Bullshit />
  </Provider>,
  document.getElementById('react-root')
);
