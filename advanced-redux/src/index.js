import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import mainReducer from './reducers/mainReducer';
import logger from 'redux-logger'

let createStoreWithMiddleware = applyMiddleware(thunkMiddleware, logger)(createStore)

let store = createStoreWithMiddleware(mainReducer)
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById('root')
);
