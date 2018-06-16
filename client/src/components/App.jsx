import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import '../App.css';
import Home from './Home.jsx'
import Game from '../containers/Game.jsx'
import Leaderboard from '../containers/Leaderboard.jsx'

const App = (props) =>
  <Router>
    <div className="App">
      <Route exact path="/" component={Home} />
      <Route exact path="/game" component={Game} />
      <Route exact path="/leaderboards" component={Leaderboard} />
    </div>
  </Router>

export default App;
