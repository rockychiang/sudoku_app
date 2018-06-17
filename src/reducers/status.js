export default (state = { autoComplete: false, checked: false, complete: false }, action) => {
  switch(action.type) {
    case 'NEW_BOARD':
      return Object.assign({}, state, { complete: false });

    case 'UPDATE_BOARD':
      return Object.assign({}, state, { checked: false, complete: false });

    case 'RESET_BOARD':
      return Object.assign({}, state, { complete: false });

    case 'SOLVE_BOARD':
      return Object.assign({}, state, { autoComplete: true, checked: true, complete: true });

    case 'CHECK_BOARD':
      return Object.assign({}, state, { autoComplete: false, checked: true, complete: action.status.complete });

    default:
      return state;
  }
}
