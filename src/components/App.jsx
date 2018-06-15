import React, { Component } from 'react';
import { BrowserRouter as Router, NavLink, Route } from 'react-router-dom';
import '../App.css';

const App = (props) =>
  <Router>
    <div className="App">
      <Route exact path="/" render={() => <h1>Home</h1>} />
    </div>
  </Router>

export default App;
