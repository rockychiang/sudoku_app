export default (state = { puzzle: { initial: [], current: [], solution: [] }}, action) => {
  let newState;
  switch(action.type) {
    case 'GENERATE_PUZZLE':
      return Object.assign({}, state, action.game);

    case 'UPDATE_BOARD':
      const { index, value } = action.payload;
      const v = value === "" ? "" : parseInt(value, 10);
      newState = Object.assign({}, state);
      newState.puzzle.current[index] = v;
      return newState;

    case 'RESET_BOARD':
      newState = Object.assign({}, state);
      newState.puzzle.current = action.puzzle.initial
      return newState;

    default:
      return state;
  }
}
