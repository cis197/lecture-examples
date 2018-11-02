import React, { Component } from 'react';

class Todo extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div>
        <li onClick={() => this.props.store.dispatch({ 
              type: 'MARK_TODO',
              idx: this.props.idx
        })}>
            {this.props.todo.text},
            {this.props.todo.done.toString()}
        </li>
        Props

            <span onClick={() => this.props.store.dispatch({
              type: 'DELETE_TODO',
              idx: this.props.idx
            })}>Delete Todo</span>
        <pre>
          {JSON.stringify(this.props, null, 2)}
        </pre>
      </div>
    );
  }
}

export default Todo;
