import addOne from '../utils/addOne'
import isEqual from '../utils/isEqual'
const sudoku = require('sudoku');

export function newBoard() {
  const initial = sudoku.makepuzzle();

  return {
    type: 'NEW_BOARD',
    puzzle: {
      initial,
      current: addOne(initial)
    }
  }
}

export function updateBoard(index, value) {
  return {
    type: 'UPDATE_BOARD',
    payload: {
      index,
      value: value === "" ? "" : parseInt(value, 10)
    }
  }
}

export function resetBoard(initial) {
  return {
    type: 'RESET_BOARD',
    puzzle: {
      initial: addOne(initial)
    }
  }
}

export function solveBoard(initial) {
  return {
    type: 'SOLVE_BOARD',
    puzzle: {
      solution: addOne(sudoku.solvepuzzle(initial))
    }
  }
}

export function checkBoard(initial, current) {
  return {
    type: 'CHECK_BOARD',
    status: {
      completed: isEqual(current, addOne(sudoku.solvepuzzle(initial)))
    }
  }
}

export function stopTimer() {
  return {
    type: 'STOP_TIMER'
  }
}

export function saveGame(data) {
  return (dispatch) => {
    dispatch({type: 'STOP_TIMER'});
    return fetch('/games', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    }).then(response => response.json())
      .then(responseJSON => {dispatch({type: 'SAVE_GAME'})})
  }
}
