import addOne from '../utils/addOne'
const sudoku = require('sudoku');

export function newGame() {
  const initial = sudoku.makepuzzle();

  return {
    type: 'GENERATE_PUZZLE',
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
      value
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
