import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Todo from './Todo.js';

class App extends Component {
  constructor() {
    super()
    this.state = {
      todos: [
        { done: false, 
          text: '1' },
        { done: false,  
          text: '2' },
        { done:  false, 
          text: '3'
        }
      ]
    }
    this.addTodo = this.addTodo.bind(this);
    this.markTodo = this.markTodo.bind(this);
  }

  addTodo()  {
    let todoInput = document.getElementById('todo').value;
    let newTodo = { done: false, text: todoInput }
    this.setState({
      todos: [...this.state.todos, newTodo]
    })
  }

  markTodo(index) {
    this.setState({
                  todos: [...this.state.todos.slice(0, index), 
                    { done: !this.state.todos[index].done,
                      text: this.state.todos[index].text },
                    ...this.state.todos.slice(index+1)]
    })
  }

  render() {
    return (
      <div>
        <input id="todo"/>
        <button onClick={this.addTodo}>Add Todo</button>
        <ul>
          { this.state.todos.map((i,idx) => (
            <Todo todo={i} idx={idx} markTodo={this.markTodo}/>
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
