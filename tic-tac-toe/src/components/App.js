import React, { Component } from 'react';
import Board from './Board';
import Moves from './Moves';
import { tick } from '../actions/index';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { elapsed: 0 }
  }

  componentDidMount() {
    this.props.store.subscribe(function () {
      this.setState(this.props.store.getState());
    }.bind(this));
    setInterval( () => {
      this.props.store.dispatch(tick())
    }, 1000)
  }

  render() {
    return (
      <div>
        Time elapsed: {this.state.elapsed} seconds
        <Board store={this.props.store}/>
        <Moves store={this.props.store}/>
      </div>
    )
  }
}

export default App;
