import React, { Component } from 'react';

class Todo extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div>
        <li onClick={() => this.props.markTodo(this.props.idx)}>
            {this.props.todo.text},
            {this.props.todo.done.toString()}
        </li>
        Props
        <pre>
          {JSON.stringify(this.props, null, 2)}
        </pre>
      </div>
    );
  }
}

export default Todo;
