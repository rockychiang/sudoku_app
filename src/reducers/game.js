export default (state = { puzzle: { initial: [], current: [] }, complete: false}, action) => {
  let newState;
  switch(action.type) {
    case 'GENERATE_PUZZLE':
      newState = Object.assign({}, state);
      newState.puzzle.initial = action.puzzle.initial;
      newState.puzzle.current = action.puzzle.current;
      return newState;

    case 'UPDATE_BOARD':
      const { index, value } = action.payload;
      const v = value === "" ? "" : parseInt(value, 10);
      newState = Object.assign({}, state);
      newState.puzzle.current[index] = v;
      return newState;

    case 'RESET_BOARD':
      newState = Object.assign({}, state);
      newState.puzzle.current = action.puzzle.initial;
      return newState;

    case 'SOLVE_BOARD':
      newState = Object.assign({}, state);
      newState.puzzle.current = action.puzzle.solution;
      newState.complete = true;
      return newState;

    default:
      return state;
  }
}
