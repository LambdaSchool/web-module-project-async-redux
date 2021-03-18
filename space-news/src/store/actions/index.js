import axios from 'axios';

export const FETCH_SPELLS_SUCCESS = "FETCH_SPELLS_SUCCESS";
export const FETCH_SPELLS_START = "FETCH_SPELLS_START";
export const FETCH_SPELLS_FAILURE = "FETCH_SPELLS_FAILURE";

export const fetchData = () => {
  return (dispatch) => {
    dispatch({type: FETCH_SPELLS_START})
    axios
      .get('https://ll.thespacedevs.com/2.0.0/config/spacecraft/')
      .then((res) => (
        // console.log(res.data.results)
        dispatch({ type: FETCH_SPELLS_SUCCESS, payload: res.data.results })
      ))
      .catch((err) => (
        dispatch({type: FETCH_SPELLS_FAILURE, payload: err.message})
    ))
  }
}

// if (typeof action === 'fuction') {
//   //don't forward to reducer
//   action(dispatch)
// }
// else if (typeof action === 'object') {
//   next (action)
// }
