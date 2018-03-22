import { combineReducers }  from 'redux';
const successReducer = (state={data: {}}, action) => {
  switch (action.type) {
    case 'REQUEST_SUCCESS':
      console.log(action.data);
      return { data: action.data }
    default:
      return state
  }
}

const errorReducer = (state=null, action) => {
  switch (action.type) {
    case 'REQUEST_FAILURE':
      return action.error.message
    default:
      return null
  }
}

const fetchingReducer = (state=false, action) => {
  switch (action.type) {
    case 'REQUEST_START':
      return true
    default:
      return false
  }
}

export default combineReducers({
  successReducer,
  errorReducer,
  fetchingReducer
})
