import React, { Component } from 'react';
import { connect } from 'react-redux';
import { newGame, resetBoard } from '../actions/game';
import Board from '../components/Board';

class Game extends Component {
  constructor(props) {
    super(props)

    this.props.newGame();
  }

  handleResetButton = () => {
    this.props.resetBoard(this.props.game.puzzle.initial)
  }

  render() {
    const { initial, current } = this.props.game.puzzle

    return (
      <div>
        <table className="board">
          <Board initial={initial} current={current} />
        </table>
        <button className="btn-game" onClick={this.handleResetButton}>Reset Game</button>
        <button className="btn-game">Solve Game</button>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    game: state.game
  };
}

export default connect(mapStateToProps, { newGame, resetBoard })(Game)
