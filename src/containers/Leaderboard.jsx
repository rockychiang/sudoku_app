import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getLeaderboard } from '../actions/leaderboard';
import LbEntry from '../components/LbEntry'
import GameButton from '../components/GameButton'
import Time from '../utils/Time'

class Leaderboard extends Component {
  constructor(props) {
    super(props);

    this.props.getLeaderboard();
  }

  handleButtonClick = (e) => {
    this.props.history.push('/game')
  }

  render() {
    const topten = this.props.leaderboard.map((entry, index) => <LbEntry key={index} index={index+1} name={entry.user_id} time={Time(entry.time)} />)

    return (
      <div>
        <h2>Leaderboard</h2>
        <table className="leaderboard">
          <tbody>
            <tr className="leaderboard-header"><th>No.</th><th className="leaderboard-name">Name</th><th>Time</th></tr>
            {topten}
          </tbody>
        </table>
        <GameButton type="new" onButtonClick={this.handleButtonClick} />
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
