export default (state = { time: 0 }, action) => {
  var timer = null;
  switch(action.type) {
    case 'NEW_BOARD':
      clearInterval(timer);
      state.time = 0;
      timer = setInterval(() => {
        state.time = state.time + 1
      }, 1000)
      return state;

    case 'SOLVE_BOARD':
      clearInterval(timer);
      return Object.assign({}, state);

    case 'STOP_TIMER':
      clearInterval(timer);
      return Object.assign({}, state);

    default:
      return state;
  }
}
