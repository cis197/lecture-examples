import React, { Component } from 'react';
import { connect } from  'react-redux';

class ErrorsAndFetching extends Component {
  render() {
    return (
      <div>
        isFetching: {this.props.fetchingReducer.toString()}, 
        errors: {this.props.errorReducer}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  let { fetchingReducer, errorReducer } = state;
  return  { fetchingReducer, errorReducer }
}
export default connect( mapStateToProps , null)(ErrorsAndFetching)
