import { combineReducers } from 'redux';
import puzzle from './puzzle';
import status from './status';

const rootReducer = combineReducers({
  puzzle,
  status
});

export default rootReducer;
