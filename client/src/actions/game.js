import addOne from '../utils/addOne'
const sudoku = require('sudoku');

export function newGame() {
  const initial = sudoku.makepuzzle();
  const current = addOne(initial);
  const solution = addOne(sudoku.solvepuzzle(initial));

  return {
    type: 'GENERATE_PUZZLE',
    game: {
      puzzle: {
        initial,
        current,
        solution
      }
    }
  }
}
