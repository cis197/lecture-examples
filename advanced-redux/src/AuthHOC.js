import React from 'react'
import { withRouter } from 'react-router';
import { connect } from 'react-redux';


export default function authHOC(Component) {
  class WrappedComponent extends React.Component {

    constructor() {
      super()
      this.checkLoggedIn = this.checkLoggedIn.bind(this);
    }

    componentDidMount() {
      this.checkLoggedIn()
    } 

    checkLoggedIn() {
      if (!this.props.authenticated) {
        alert('not authed')
        this.props.history.push('/login')
      }
    }

    componentDidUpdate() {
      this.checkLoggedIn()
    }

    render() {
      if (this.props.authenticated) {
        return <Component {...this.props}/>
      } else {
        return null;
      }
    }
  }
  let mapStateToProps = state => {
    let { authReducer } = state;
    return authReducer 
  }
  return withRouter(connect(mapStateToProps, null)(WrappedComponent))
}
