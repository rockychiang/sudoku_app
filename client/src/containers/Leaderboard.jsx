import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getLeaderboard } from '../actions/leaderboard';

class Leaderboard extends Component {
  constructor(props) {
    super(props);

    this.props.getLeaderboard();
  }

  render() {
    const topten = this.props.leaderboard.map((entry, index) => <tr key={index}><td>{index+1}.</td><td>{entry.user.name}</td><td>{entry.timer.time}</td></tr>)

    return (
      <div>
        <table>
          <tbody>
            <tr><th>No.</th><th>Name</th><th>Time</th></tr>
            {topten}
          </tbody>
        </table>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    leaderboard: state.leaderboard
  }
}

export default connect(mapStateToProps, { getLeaderboard })(Leaderboard)
