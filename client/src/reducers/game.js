export default (state = { puzzle: { initial: [], current: [], solution: [] }}, action) => {
  switch(action.type) {
    case 'GENERATE_PUZZLE':
      return Object.assign({}, state, action.game);

    case 'UPDATE_BOARD':
      const { index, value } = action.payload;
      const newState = Object.assign({}, state);
      const v = value === "" ? "" : parseInt(value, 10);
      newState.puzzle.current[index] = v;
      return newState;

    default:
      return state;
  }
}
