import React from 'react';

const LbEntry = ({ index, name, time }) =>
  <tr>
    <td>{index}.</td>
    <td>{name}</td>
    <td>{time}</td>
  </tr>

export default LbEntry;
