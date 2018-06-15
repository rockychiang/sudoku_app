import React from 'react';

const Board = ({ puzzle }) => {
  const game = puzzle.map(i => {
    if (i === null) {
      return <td>0</td>
    } else {
      return <td>{i}</td>
    }
  })

  return (
    <div>
      {game}
    </div>
  )
}

export default Board;
