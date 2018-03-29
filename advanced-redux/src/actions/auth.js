export function login () { 
  return dispatch => {
    setTimeout(() => {
      dispatch({ type: 'LOGIN_USER' })
    }, 1000)
  }
}
