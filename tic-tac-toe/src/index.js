import React from 'react';
import { render } from 'react-dom';
import App from './App';
import { createStore } from 'redux';
import reducer from './reducer';
let store = createStore(reducer);

render(<App store={store}/>, document.getElementById('root'))
