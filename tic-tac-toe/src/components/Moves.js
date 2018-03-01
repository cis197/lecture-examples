import React, { Component } from 'react';

class Moves extends Component {
  constructor(props) {
    super(props) 
    this.state = {
      history: []
    }
  }

  componentDidMount() {
    this.props.store.subscribe(function () {
      this.setState(this.props.store.getState());
    }.bind(this));
  }

  render() {
    let history = this.state.history.map( (i,idx) => (<li key={idx}>{i}</li>))
    return (
      <div>
        {history} 
      </div>
    )
  }
}

export default Moves;
