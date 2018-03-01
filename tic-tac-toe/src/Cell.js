import React, { Component } from 'react';

class Cell extends Component {
  constructor(props) {
    super(props) 
  }

  handleFn() {
    this.props.store.dispatch({
      type: 'CELL_CLICK',
      id: this.props.id
    })
  }

  render() {
    console.log(this.props.val)
    return (
      <div onClick={this.handleFn.bind(this)} className="square">
        {this.props.val}
      </div>
    )
  }
}

export default Cell;
