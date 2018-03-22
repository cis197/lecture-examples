import React, { Component } from 'react';
import { Route, Switch } from 'react-router'
import { BrowserRouter as Router } from 'react-router-dom';
import { connect } from 'react-redux';

const searchProfile = (val='abhisuri97') => {
  return dispatch => {
    dispatch({ type: 'REQUEST_START' })
    return fetch(`https://api.github.com/users/${val}`)
      .then(res => {
        if (res.status === 200) return res.json();
        else throw new Error(res)
      })
      .then((data) =>  {
        dispatch({
                 type: 'REQUEST_SUCCESS',
                 data
        })
      })
      .catch((error) => {
        dispatch({
                 type: 'REQUEST_FAILURE',
                 error
        })
      })
  }
}
class About extends Component {
  render() {
    return (
      <div> this is the about page </div>
    )
  }
}

class ErrorsAndFetching extends Component {
  render() {
    console.log(this.props)
    return (
      <div>
        isFetching: {this.props.fetchingReducer.toString()}, 
        errors: {this.props.errorReducer}
      </div>
    )
  }
}

const ConnectedEandF = connect( 
    (state) => { 
      return { 
        fetchingReducer: state.fetchingReducer, 
        errorReducer: state.errorReducer 
      } 
    }, null)(ErrorsAndFetching)

class Profile extends Component {

  componentDidMount() {
    this.props.search(this.props.match.params.user)
  }

  searchFn() {
    let val = document.getElementById('val').value;
    this.props.search(val);
  }

  render() {
    return(
      <div>
        <ConnectedEandF/>
        <input type="text" id="val"/>
        <button onClick={this.searchFn.bind(this)}>Search!</button>
        <img src={this.props.data.avatar_url}/>
        <br/>
        {this.props.data.login}
      </div>
    )
  }
}

let mapStateToProps = (state) => {
  return state.successReducer 
}

let mapDispatchToProps = (dispatch) => {
  return {
    search: (val) => dispatch(searchProfile(val))
  }
}

const ConnectedProfile = connect(mapStateToProps, mapDispatchToProps)(Profile)

class App extends Component {
  render() {
    return (
      <Router>
          <Switch>
            <Route path="/about" component={About}/>
            <Route default path="/search/:user?" component={ConnectedProfile}/>
          </Switch>
      </Router>
    );
  }
}

export default App;
