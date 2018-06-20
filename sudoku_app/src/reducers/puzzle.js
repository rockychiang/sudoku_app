export default (state = { initial: [], current: [] }, action) => {
  let newState;
  switch(action.type) {
    case 'NEW_BOARD':
      return Object.assign({}, state, { initial: action.puzzle.initial, current: action.puzzle.current });

    case 'UPDATE_BOARD':
      const { index, value } = action.payload;
      newState = Object.assign({}, state);
      newState.current[index] = value;
      return newState;

    case 'RESET_BOARD':
      return Object.assign({}, state, { current: action.puzzle.initial });

    case 'SOLVE_BOARD':
      return Object.assign({}, state, { current: action.puzzle.solution });

    default:
      return state;
  }
}
