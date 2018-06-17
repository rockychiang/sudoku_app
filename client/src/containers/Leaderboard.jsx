import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getLeaderboard } from '../actions/leaderboard';
import LbEntry from '../components/LbEntry'
import Time from '../utils/Time'

class Leaderboard extends Component {
  constructor(props) {
    super(props);

    this.props.getLeaderboard();
  }

  render() {
    const topten = this.props.leaderboard.map((entry, index) => <LbEntry key={index} index={index+1} name={entry.user.name} time={Time(entry.timer.time)} />)

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
