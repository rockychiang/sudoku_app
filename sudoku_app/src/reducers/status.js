export default (state = { autoComplete: false, checked: false, completed: false }, action) => {
  switch(action.type) {
    case 'NEW_BOARD':
      return Object.assign({}, state, { autoComplete: false, checked: false, completed: false });

    case 'UPDATE_BOARD':
      return Object.assign({}, state, { checked: false, completed: false });

    case 'RESET_BOARD':
      return Object.assign({}, state, { checked: false, completed: false });

    case 'SOLVE_BOARD':
      return Object.assign({}, state, { autoComplete: true, checked: true, completed: true });

    case 'CHECK_BOARD':
      return Object.assign({}, state, { checked: true, completed: action.status.completed });

    default:
      return state;
  }
}
