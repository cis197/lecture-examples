import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// new stuff
import { createStore } from 'redux';

const reducer = (state = { todos: [] }, action) => {
  console.log(action)
  switch (action.type) {
    case 'ADD_TODO':
      return { todos: [...state.todos, action.todo] }
    case 'MARK_TODO':
      return { 
        todos: state.todos.map((i, idx) => (
          (idx == action.idx) ? { ...i, done: !i.done } : i
        )) 
      }
    case 'DELETE_TODO':
      return {
        todos: [...state.todos.filter((i, idx) => (
          (idx != action.idx)))]
      }
    default:
      return state
  }
}

const store = createStore(reducer)

ReactDOM.render(<App store={store}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
