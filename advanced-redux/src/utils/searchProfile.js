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

export default searchProfile;
