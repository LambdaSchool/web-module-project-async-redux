import { FETCHING_QUOTE_SUCCESS, FETCHING_QUOTE_FAILURE, } from "../actions/actions";


const initialState = {
    display: false,
    fact: ""
};


export const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCHING_QUOTE_SUCCESS:
            return { ...state, display: true, fact: action.payload }
        case FETCHING_QUOTE_FAILURE:
            return { ...state, error: action.payload }
        default:
            console.log("Error: unknown action type in Title Reducer");
            return state;  
    }
}