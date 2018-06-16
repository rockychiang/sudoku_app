import React from 'react';

const InputTd = ({ num, x, y }) =>
  <td className={`x${x} y${y}`}>
    <input type='number' maxlength="1" autocomplete="off" min="1" max="9" />
  </td>

export default InputTd;
