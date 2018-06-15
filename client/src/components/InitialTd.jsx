import React from 'react';

const InitialTd = ({ num, x, y }) =>
  <td className={`initial x${x} y${y}`}>
    {num}
  </td>

export default InitialTd;
