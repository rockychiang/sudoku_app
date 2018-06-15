import React from 'react';
import InitialTd from './InitialTd'

const Board = ({ initial, current }) => {
  const board = [
    current.slice(0,9),
    current.slice(9,18),
    current.slice(18,27),
    current.slice(27,36),
    current.slice(36,45),
    current.slice(45,54),
    current.slice(54,63),
    current.slice(63,72),
    current.slice(72),
  ];

  const game = board.map((row, y) => {
    return (
      <tr>
        {row.map((num, x) => {
          const ini = initial[(9*y) + x];
          if (ini !== null) {
            return <InitialTd num={num} x={x+1} y={y+1} />
          } else {
            return <td className={`x${x+1} y${y+1}`}></td>
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
