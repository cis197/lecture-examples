import React, { Component } from 'react';
import Board from './Board';
import Moves from './Moves';

class App extends Component {
  constructor(props) {
    super(props) 
  }

  render() {
    return (
      <div>
        <Board store={this.props.store}/>
        <Moves store={this.props.store}/>
      </div>
    )
  }
}

export default App;
