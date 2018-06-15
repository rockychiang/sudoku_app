import React from 'react';

const Board = ({ puzzle }) => {
  const board = [
    puzzle.slice(0,9),
    puzzle.slice(9,18),
    puzzle.slice(18,27),
    puzzle.slice(27,36),
    puzzle.slice(36,45),
    puzzle.slice(45,54),
    puzzle.slice(54,63),
    puzzle.slice(63,72),
    puzzle.slice(72),
  ]

  const game = board.map(row => {
    return (
      <tr>
        {row.map(i => {
          if (i === null) {
            return <td></td>
          } else {
            return <td>{i}</td>
          }
        })}
      </tr>
    )
  })

  return (
    <div>
      {game}
    </div>
  )
}

export default Board;
