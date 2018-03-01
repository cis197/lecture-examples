import React, { Component } from 'react';
import { cellClick } from '../actions/index';

class Cell extends Component {
  constructor(props) {
    super(props) 
  }

  handleFn() {
    this.props.store.dispatch(cellClick(this.props.id))
  }

  render() {
    return (
      <div onClick={this.handleFn.bind(this)} className="square">
        {this.props.val}
      </div>
    )
  }
}

export default Cell;
