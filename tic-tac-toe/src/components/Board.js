import React, { Component } from 'react';
import Cell from './Cell';
import initialState from '../constants/initialState';
import { reset  } from '../actions/index';

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  componentDidMount() {
    this.props.store.subscribe(function () {
      this.setState(this.props.store.getState());
    }.bind(this));
  }

  //cellClick(id) {
    //if (this.state.cells[id] === '_') {
      //this.setState({
        //cells: this.state.cells.map((i, idx) => { return id === idx ? this.state.player : i }),
        //player: this.state.player === 'X' ? 'O' : 'X'
      //})
    //}
  //} 
  
  resetCall()  {
    this.props.store.dispatch(reset())
  }

  render() {
    let cells = this.state.cells.map( (i, idx) => { 
      return <Cell store={this.props.store} val={i} key={idx} id={idx}/> 
    })

    return (
      <div>
        <p>Hi, current player is {this.state.player}</p>
        <p>Hi, current winner is  {this.state.winner}</p>
        <div className="cell-container">
          {cells}
        </div>
        <button onClick={this.resetCall.bind(this)}>Reset</button>
      </div>
    )
  }
}

export default Board;
