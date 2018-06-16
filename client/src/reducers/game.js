export default (state = { puzzle: { initial: [], current: [] }, complete: false}, action) => {
  let newState;
  switch(action.type) {
    case 'NEW_BOARD':
      newState = Object.assign({}, state);
      newState.puzzle.initial = action.puzzle.initial;
      newState.puzzle.current = action.puzzle.current;
      newState.complete = false;
      return newState;

    case 'UPDATE_BOARD':
      const { index, value } = action.payload;
      const v = value === "" ? "" : parseInt(value, 10);
      newState = Object.assign({}, state);
      newState.puzzle.current[index] = v;
      newState.complete = false;
      return newState;

    case 'RESET_BOARD':
      newState = Object.assign({}, state);
      newState.puzzle.current = action.puzzle.initial;
      newState.complete = false;
      return newState;

    case 'SOLVE_BOARD':
      newState = Object.assign({}, state);
      newState.puzzle.current = action.puzzle.solution;
      newState.complete = true;
      newState.autoComplete = true;
      return newState;

    case 'CHECK_BOARD':
      newState = Object.assign({}, state);
      newState.complete = action.status.complete;
      newState.autoComplete = false;
      return newState;

    default:
      return state;
  }
}
