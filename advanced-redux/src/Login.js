import React, { Component } from 'react';
import { connect } from 'react-redux'
import { login } from './actions/auth';
import { withRouter } from 'react-router-dom';

class Login extends Component {
  constructor() {
    super();
  }

  componentDidUpdate() {
    if (this.props.authenticated) {
      this.props.history.push('/search')
    }
  }

  render() {
    return (
      <div>
        <h1>IsLoggedIn?: {this.props.authenticated.toString()}</h1>
        <button onClick={this.props.login}>Log in </button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  let { authReducer } = state;
  return authReducer;
}

const mapDispatchToProps = dispatch => {
  return {
    login: () => dispatch(login())
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login))
