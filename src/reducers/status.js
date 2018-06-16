export default (state = { complete: false }, action) => {
  let newState;
  switch(action.type) {
    case 'NEW_BOARD':
      newState = Object.assign({}, state);
      newState.complete = false;
      return newState;

    case 'UPDATE_BOARD':
      newState = Object.assign({}, state);
      newState.complete = false;
      newState.checked = false;
      return newState;

    case 'RESET_BOARD':
      newState = Object.assign({}, state);
      newState.complete = false;
      return newState;

    case 'SOLVE_BOARD':
      newState = Object.assign({}, state);
      newState.complete = true;
      newState.autoComplete = true;
      newState.checked = true;
      return newState;

    case 'CHECK_BOARD':
      newState = Object.assign({}, state);
      newState.complete = action.status.complete;
      newState.autoComplete = false;
      newState.checked = true;
      return newState;

    default:
      return state;
  }
}
