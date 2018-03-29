import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ErrorsAndFetching from './ErrorsAndFetching';
import searchProfile from './utils/searchProfile';

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
        <ErrorsAndFetching/>
        <input type="text" id="val"/>
        <button onClick={this.searchFn.bind(this)}>Search!</button>
        <br/>
        <img src={this.props.data.avatar_url}/>
        <br/>
        {this.props.data.login}
        <br/>
        Followers: {this.props.data.followers}
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Profile))
