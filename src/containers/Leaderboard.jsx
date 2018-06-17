import React, { Component } from 'react';
import { connect } from 'react-redux';

class Leaderboard extends Component {
  constructor(props) {
    super(props);


  }
  
  render() {
    return (
      <div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    leaderboard: state.leaderboard
  }
}

export default connect(mapStateToProps)(Leaderboard)
