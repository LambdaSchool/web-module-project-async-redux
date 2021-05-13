import { combineReducers } from 'redux';

import Fox from './Fox';

const rootReducer = combineReducers({
  fox: Fox
});

export default rootReducer;
