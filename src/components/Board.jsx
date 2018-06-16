import React from 'react';
import calcId from '../utils/calcId';
import InitialTd from './InitialTd';
import InputTd from './InputTd';

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
      <tr key={y}>
        {row.map((num, x) => {
          const boxId = calcId(x, y);
          if (initial[boxId] !== null) {
            return <InitialTd num={num} x={x} y={y} key={x} />
          } else {
            return <InputTd num={num} x={x} y={y} boxId={boxId} key={x} />
          }
        })}
      </tr>
    )
  })

  return (
    <tbody>
      {game}
    </tbody>
  )
}

export default Board;
