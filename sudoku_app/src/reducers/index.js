import { combineReducers } from 'redux';
import leaderboard from './leaderboard';
import puzzle from './puzzle';
import status from './status';
import timer from './timer';

const rootReducer = combineReducers({
  leaderboard,
  puzzle,
  status,
  timer
});

export default rootReducer;
