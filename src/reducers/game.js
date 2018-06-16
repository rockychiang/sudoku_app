export default (state = {
  puzzle: { initial: [], current: [] },
  status: { complete: false},
}, action) => {
  let newState;
  switch(action.type) {
    case 'NEW_BOARD':
      newState = Object.assign({}, state);
      newState.puzzle.initial = action.puzzle.initial;
      newState.puzzle.current = action.puzzle.current;
      newState.status.complete = false;
      return newState;

    case 'UPDATE_BOARD':
      const { index, value } = action.payload;
      const v = value === "" ? "" : parseInt(value, 10);
      newState = Object.assign({}, state);
      newState.puzzle.current[index] = v;
      newState.status.complete = false;
      newState.status.checked = false;
      return newState;

    case 'RESET_BOARD':
      newState = Object.assign({}, state);
      newState.puzzle.current = action.puzzle.initial;
      newState.status.complete = false;
      return newState;

    case 'SOLVE_BOARD':
      newState = Object.assign({}, state);
      newState.puzzle.current = action.puzzle.solution;
      newState.status.complete = true;
      newState.status.autoComplete = true;
      newState.status.checked = true;
      return newState;

    case 'CHECK_BOARD':
      newState = Object.assign({}, state);
      newState.status.complete = action.status.complete;
      newState.status.autoComplete = false;
      newState.status.checked = true;
      return newState;

    default:
      return state;
  }
}
