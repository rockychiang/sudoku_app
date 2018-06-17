import React, { Component } from 'react';
import { connect } from 'react-redux';
import { newBoard, resetBoard, solveBoard, checkBoard, stopTimer } from '../actions/game';
import Board from '../components/Board';
import GameButton from '../components/GameButton';

class Game extends Component {
  constructor(props) {
    super(props)

    this.props.newBoard();
  }

  componentDidUpdate() {
    const { puzzle, status } = this.props
    if ( !puzzle.current.includes("") && !status.complete && !status.checked) {
      this.props.checkBoard(puzzle.initial, puzzle.current);
    } else if ( status.complete && status.checked && !status.autoComplete ) {
      this.props.stopTimer();
      setTimeout(() => {this.props.history.push('/leaderboard')}, 2000);
    }
  }

  handleButtonClick = (e) => {
    this.props[e.target.name](this.props.puzzle.initial)
  }

  render() {
    const { initial, current } = this.props.puzzle

    return (
      <div>
        <table className="board">
          <Board initial={initial} current={current} />
        </table>
        <GameButton type="new" onButtonClick={this.handleButtonClick} />
        <GameButton type="reset" onButtonClick={this.handleButtonClick} />
        <GameButton type="solve" onButtonClick={this.handleButtonClick} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    puzzle: state.puzzle,
    status: state.status
  };
}

export default connect(mapStateToProps, { newBoard, resetBoard, solveBoard, checkBoard, stopTimer })(Game)
