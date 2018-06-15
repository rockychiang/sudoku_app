import React from 'react';
import { BrowserRouter as Router, NavLink, Route } from 'react-router-dom';
import '../App.css';
import Game from '../containers/Game.jsx'
import Leaderboard from '../containers/Leaderboard.jsx'

const App = (props) =>
  <Router>
    <div className="App">
      <Route exact path="/" render={() => <h1>Home</h1>} />
      <Route exact path="/game" component={Game} />
      <Route exact path='/leaderboards' component={Leaderboard} />
    </div>
  </Router>

export default App;
