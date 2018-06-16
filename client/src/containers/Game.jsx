import React, { Component } from 'react';
import { connect } from 'react-redux';
import { newBoard, resetBoard, solveBoard, checkBoard } from '../actions/game';
import Board from '../components/Board';

class Game extends Component {
  constructor(props) {
    super(props)

    this.props.newBoard();
  }

  handleButtonClick = (e) => {
    this.props[e.target.name](this.props.game.puzzle.initial)
  }

  componentDidUpdate() {
    const { puzzle, complete } = this.props.game
    if (!puzzle.current.includes("") && !complete) {
      this.props.checkBoard(puzzle.initial, puzzle.current);
    }
  }

  render() {
    const { initial, current } = this.props.game.puzzle

    return (
      <div>
        <table className="board">
          <Board initial={initial} current={current} />
        </table>
        <button className="btn-game" name="newBoard" onClick={this.handleButtonClick}>New Game</button>
        <button className="btn-game" name="resetBoard" onClick={this.handleButtonClick}>Reset Game</button>
        <button className="btn-game" name="solveBoard" onClick={this.handleButtonClick}>Solve Game</button>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    game: state.game
  };
}

export default connect(mapStateToProps, { newBoard, resetBoard, solveBoard, checkBoard })(Game)
