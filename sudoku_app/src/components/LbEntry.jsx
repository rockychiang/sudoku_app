import React from 'react';

const LbEntry = ({ index, name, time }) =>
  <tr>
    <td className="leaderboard-index">{index}.</td>
    <td className="leaderboard-name">{name}</td>
    <td className="leaderboard-time">{time}</td>
  </tr>

export default LbEntry;
