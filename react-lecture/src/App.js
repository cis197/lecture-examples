import React  from 'react';
import { Component }  from 'react';
import Tweet from './Tweet';

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.store.subscribe(function () {
      this.setState(this.props.store.getState());
    }.bind(this));
  }

  // old  approach
  //deleteParent(id) {
    //let newTweets = this.state.tweets.filter((x) => { return x.id !== id });
    //this.setState({
      //tweets: newTweets
    //})
  //}

  render()  {
    let tweetlist = this.props.store.getState().tweets.map( (t, pos) => {
        return (
          <Tweet store={this.props.store} 
                 key={pos} 
                 id={t.id} 
                 content={t.content} 
                 author={t.author}/>
        );
      }
    )

    return (
      <div>
        <h1>Total Tweets = { this.props.store.getState().tweets.length }</h1>
        {tweetlist}
      </div>
    )
  }
}

export default App;
