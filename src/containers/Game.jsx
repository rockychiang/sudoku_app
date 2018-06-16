import React, { Component } from 'react';
import { connect } from 'react-redux';
import { newBoard, resetBoard, solveBoard, checkBoard } from '../actions/game';
import Board from '../components/Board';
import GameButton from '../components/GameButton';

class Game extends Component {
  constructor(props) {
    super(props)

    this.props.newBoard();
  }

  componentDidUpdate() {
    const { puzzle, status } = this.props.game
    if ( !puzzle.current.includes("") && !status.complete && !status.checked) {
      this.props.checkBoard(puzzle.initial, puzzle.current);
    }
  }

  handleButtonClick = (e) => {
    this.props[e.target.name](this.props.game.puzzle.initial)
  }

  render() {
    const { initial, current } = this.props.game.puzzle

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
    game: state.game
  };
}

export default connect(mapStateToProps, { newBoard, resetBoard, solveBoard, checkBoard })(Game)
