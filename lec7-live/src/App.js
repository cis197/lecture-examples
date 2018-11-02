import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: [
        { text: 'foo', done: false }, 
        { text: 'buzz', done: false },
        { text: 'baz', done: false }
      ]
    }
    this.addTodo = this.addTodo.bind(this)
    this.markTodo = this.markTodo.bind(this)
  }

  addTodo() {
    let todoText = document.getElementById('todoinput').value;
    //this.state.todos.push(todoText)
    this.setState({
                  todos: [...this.state.todos, { done: false, text: todoText} ]
    })
  }
  
  markTodo(index) {
    console.log(index);
    let newTodos = this.state.todos.map((i, idx) => {
      if (idx === index) {
        console.log('hi')
        return { done: !i.done, text: i.text }
      } else {
        return i
      }
    })

    this.setState({
      todos: newTodos
    })
  }

  render() {
    let liTodos = this.state.todos.map((i, idx) => 
      <li onClick={() => this.markTodo(idx)}>
        {i.text}, {i.done.toString()}
      </li>)
    console.log(liTodos)
    return (
      <div>
        <input id="todoinput"/>
        <button onClick={this.addTodo}>Click to add todo</button>
        <ul>
          {liTodos}
        </ul>
        <pre>
        {JSON.stringify(this.state, null, 2)}
        </pre>
      </div>
    );
  }
}

export default App;
