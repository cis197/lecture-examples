import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import { createStore } from 'redux';
import reducer from './reducers/main';
let store = createStore(reducer);

render(<App store={store}/>, document.getElementById('root'))
