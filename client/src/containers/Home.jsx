import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Home extends Component {
  render() {
    return (
      <div id="Home">
        <h1>React Sudoku App</h1>

        <div className="box">
          <Link to="/game"><button className="btn btn-secondary">New Game</button></Link>
          <br /><br />
          <Link to="/leaderboard"><button className="btn btn-secondary">Leaderboard</button></Link>
        </div>
      </div>
    )
  }
}
