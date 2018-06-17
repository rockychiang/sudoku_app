export default (state = [], action) => {
  switch(action.type) {
    case 'GET_LEADERBOARD':
      return Object.assign({}, state, [ action.leaderboard ]);

    default:
      return state;
  }
}
