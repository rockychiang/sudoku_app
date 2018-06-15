export function newGame() {
  const sudoku = require('sudoku');
  const initial = sudoku.makepuzzle();
  const solution = sudoku.solvepuzzle(initial);

  return {
    type: 'GENERATE_PUZZLE',
    game: {
      puzzle: {
        initial,
        solution
      }
    }
  }
}
