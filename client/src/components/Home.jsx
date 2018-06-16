import React from 'react';
import { Link } from 'react-router-dom';

const Home = (props) =>
  <div id="Home">
    <h1>React Sudoku App</h1>

    <div className="box">
      <Link to="/game"><button className="btn btn-secondary">New Game</button></Link>
      <br /><br />
      <Link to="/leaderboard"><button className="btn btn-secondary">Leaderboard</button></Link>
    </div>
  </div>

export default Home;
