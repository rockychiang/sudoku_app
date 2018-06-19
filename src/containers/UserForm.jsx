import React, { Component } from 'react';
import { connect } from 'react-redux';
import { saveGame } from '../actions/game'

class UserForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: ''
    }
  }

  handleInputChange = e => {
    this.setState({
      username: e.target.value
    })
  }

  handleFormSubmit = e => {
    e.preventDefault();
    const data = {
      username: this.state.username,
      initial_board: this.props.puzzle.initial,
      current_board: this.props.puzzle.current,
      completed: this.props.status.complete,
      time: this.props.timer.time
    }
    this.props.saveGame(data)
    // this.props.history.push('/leaderboard')
  }

  render() {
    return (
      <div>
        <div className="dim">
        </div>
        <div className="box userform">
          <h2>Congratulations!</h2>
          <p>Please enter you name for ranking purposes</p>
          <form onSubmit={this.handleFormSubmit}>
            <input type="text" name="username" placeholder="username" value={this.state.username} onChange={this.handleInputChange} className="userform-input" />
            <br />
            <input type="submit" className="userform-submit" />
          </form>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    puzzle: state.puzzle,
    status: state.status,
    timer: state.timer
  };
}

export default connect(mapStateToProps, { saveGame })(UserForm)
