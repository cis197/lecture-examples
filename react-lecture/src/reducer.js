const initialState = {
  tweets: []
}

const tweetReducer = (state=initialState, action) => {
  switch (action.type) {
    case 'ADD_TWEET':
      return Object.assign({}, state, {
        tweets:  [...state.tweets, action.tweet]
      })
    case 'DELETE_TWEET':
      console.log(action)
      return Object.assign({}, state, {
        tweets: state.tweets.filter((x) => { return x.id != action.id })
      })
    default:
      return state
  }
}

export default tweetReducer;
