import React, { Component } from 'react';
import { connect } from 'react-redux';
import { newBoard, resetBoard, solveBoard, checkBoard, stopTimer } from '../actions/game';
import Board from '../components/Board';
import GameButton from '../components/GameButton';
import UserForm from './UserForm';

class Game extends Component {
  constructor(props) {
    super(props)

    this.props.newBoard();
  }

  componentDidUpdate() {
    const { puzzle, status } = this.props
    if ( !puzzle.current.includes("") && !status.completed && !status.checked) {
      this.props.checkBoard(puzzle.initial, puzzle.current);
    } else if ( status.completed && status.checked && !status.autoComplete ) {
      this.props.stopTimer();
    }
  }

  handleButtonClick = (e) => {
    this.props[e.target.name](this.props.puzzle.initial)
  }

  render() {
    const { initial, current } = this.props.puzzle
    const { status } = this.props
    let form;

    if (status.completed && status.checked && !status.autoComplete) {
      form = <UserForm history={this.props.history} />
    }

    return (
      <div>
        <table className="board">
          <Board initial={initial} current={current} disableInput={status.autoComplete} />
        </table>
        <GameButton type="new" onButtonClick={this.handleButtonClick} />
        <GameButton type="reset" onButtonClick={this.handleButtonClick} disabled={status.autoComplete} />
        <GameButton type="solve" onButtonClick={this.handleButtonClick} disabled={status.autoComplete} />
        {form}
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
