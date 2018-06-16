export default (state = { puzzle: { initial: [], current: [], solution: [] }}, action) => {
  switch(action.type) {
    case 'GENERATE_PUZZLE':
      return Object.assign({}, state, action.game);

    case 'UPDATE_BOARD':
      const { index, value } = action.payload;
      state.puzzle.current[index] = parseInt(value);
      return state;

    default:
      return state;
  }
}
