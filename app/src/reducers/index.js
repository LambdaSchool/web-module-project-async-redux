import { FETCH_START, FETCH_SUCCESS, FETCH_FAIL } from "../actions";

const initalState = {
    rap: {
        picture: ''
    },
    isFetching: false,
    error: ''
};

export const reducer = (state = initalState, action) => {
    switch (action.type) {
        case{FETCH_START}:
        return({
            ...state,
            isFetching: true
        })
        case(FETCH_SUCCESS):
        return ({
            ...state,
            isFetching: false,
            rap: action.payload
        })
        case(FETCH_FAIL):
        return({
            ...state,
            error: action.payload,
            isFetching: false
        })
        default:
            return state;
    }
};