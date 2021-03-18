import { FETCH_CHARS_BEGIN, FETCH_CHARS_WIN, FETCH_CHARS_FAIL } from '../Actions/actions';

const initialState = {
    isLoading: false,
    chars: [],
    error:''
};

export const reducer = ( state = initialState, action) => {
    switch (action.type) {
        case FETCH_CHARS_BEGIN:
            return {
                ...state,
                isLoading: true
            };
        case FETCH_CHARS_WIN:
            return {
                ...state,
                isLoading:false,
                chars: action.payload,
                error: ''
            };
        case FETCH_CHARS_FAIL:
            return {
                ...state,
                isLoading:false,
                error: action.payload
            };
        default:
            return state;    
    }
};