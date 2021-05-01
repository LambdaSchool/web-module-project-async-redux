import axios from 'axios'

export const FETCHING_START = 'FERCHING_START'
export const FETCHING_SUCCESS = 'FETCHING_SUCCESS'
export const FETCHING_FAILURE = 'FETCHING_FAILURE'

export const fetchData = () => (dispatch) => {
    dispatch({type: FETCHING_START})
    axios.get("https://api.coinstats.app/public/v1/coins?skip=0&limit=5&currency=EUR")
    .then((res => {
        console.log("data", res.data)
    }))
}