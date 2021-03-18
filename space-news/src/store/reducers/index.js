import { FETCH_SPELLS_SUCCESS, FETCH_SPELLS_START, FETCH_SPELLS_FAILURE } from '../actions'


const initialState = {
  spacecrafts: [],
  isLoading: false,
  error: ''
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SPELLS_SUCCESS:
      return {
        ...state,
        spacecrafts: action.payload,        
        isLoading: false
      }
    case FETCH_SPELLS_START:
      return {
        ...state,
        isLoading: true
      }
    case FETCH_SPELLS_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      }
    default:
      return state;
  }
};