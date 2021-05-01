import {FETCHING_FAILURE, FETCHING_START, FETCHING_SUCCESS} from '../action/action'

const initialState = {
    icon: {},
    error: '',
    loading: false
}

export const coinReducer = (state = initialState, action ) => {
    switch (action.type) {
        
        case FETCHING_START:
            return {...state, loading: true}
        case FETCHING_SUCCESS:
            return { ...state, loading: false, coin: action.payload}
        case FETCHING_FAILURE:
            return { ...state, loading: false, error: action.payload}
        
        default: return state
    }
}