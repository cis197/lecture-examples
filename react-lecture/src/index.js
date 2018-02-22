import React from 'react';
import { render } from 'react-dom';
import { Component } from 'react';
import App from './App';
import { createStore } from 'redux';
import reducer from './reducer';
import tweets from './tweetList';

let store = createStore(reducer);
tweets.map((i) => {
  store.dispatch({
                 type: 'ADD_TWEET',
                 tweet: i
  })
})

render(
  <App store={store} />,
  document.getElementById('root')
)
