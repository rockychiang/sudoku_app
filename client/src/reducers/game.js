export default (state = {}, action) => {
  switch(action.type) {
    case 'GENERATE_PUZZLE':
      return Object.assign({}, state, action.game);

    default:
      return state;
  }
}
