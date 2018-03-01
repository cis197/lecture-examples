import React from 'react';
import { Component } from 'react';

class Tweet extends Component  {
  constructor(props)  {
    super(props)
    this.state =  {
      likes: 0
    }
  }

  likeTweet() {
    this.setState({
      likes: this.state.likes + 1
    })
  }

  deleteTweet() {
    // approach 1
    //this.props.parentState.setState({
      //tweets: this.props.parentState.tweets.filter((x, pos) => { pos != this.props.key })
    //})
    
    // approach 2
    //this.props.deleteParent(this.props.id)
    this.props.store.dispatch({
                              type: 'DELETE_TWEET',
                              id: this.props.id
    })
  }


  render() {
    return (
      <div className="tweet" style={{ display: this.state.deleted === true ? 'none' : 'block' }}>
        <h3>Author: {this.props.author}</h3>
        <p>Content:  {this.props.content}</p>
        <p>Likes: {this.state.likes}</p>
        <button onClick={this.likeTweet.bind(this)} id="like">Like</button>
        <button onClick={this.deleteTweet.bind(this)} id="delete">Delete</button>
      </div>
    )
  }
}

export default Tweet;
