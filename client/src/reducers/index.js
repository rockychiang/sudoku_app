import { combineReducers } from 'redux';
import puzzle from './puzzle';
import status from './status';
import timer from './timer';

const rootReducer = combineReducers({
  puzzle,
  status,
  timer
});

export default rootReducer;
