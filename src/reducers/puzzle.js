export default (state = { initial: [], current: [] }, action) => {
  let newState;
  switch(action.type) {
    case 'NEW_BOARD':
      newState = Object.assign({}, state);
      newState.initial = action.puzzle.initial;
      newState.current = action.puzzle.current;
      return newState;

    case 'UPDATE_BOARD':
      const { index, value } = action.payload;
      const v = value === "" ? "" : parseInt(value, 10);
      newState = Object.assign({}, state);
      newState.current[index] = v;
      return newState;

    case 'RESET_BOARD':
      newState = Object.assign({}, state);
      newState.current = action.puzzle.initial;
      return newState;

    case 'SOLVE_BOARD':
      newState = Object.assign({}, state);
      newState.current = action.puzzle.solution;
      return newState;

    default:
      return state;
  }
}
