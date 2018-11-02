import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Todo from './Todo.js';

class App extends Component {
  constructor() {
    super();
    this.state = { todos: [] }
    this.addTodo = this.addTodo.bind(this);
    this.markTodo = this.markTodo.bind(this);
  }
  
  componentDidMount() {
    this.props.store.subscribe(() => this.setState(this.props.store.getState()))
  }

  addTodo()  {
    let todoInput = document.getElementById('todo').value;
    let newTodo = { done: false, text: todoInput }
    this.props.store.dispatch({
      type: 'ADD_TODO',
      todo: newTodo
    })
  }

  markTodo(index) {
    this.props.store.dispatch({
      type: 'MARK_TODO',
      idx: index
    })
  }

  render() {
    return (
      <div>
        <input id="todo"/>
        <button onClick={this.addTodo}>Add Todo</button>
        <ul>
          { this.state.todos.map((i,idx) => (
            <Todo todo={i} idx={idx} store={this.props.store}/>
          ))}    
        </ul>
        State Tree
        <pre>
          {JSON.stringify(this.state, null, 2)}
        </pre>
      </div>
    );
  }
}

export default App;
