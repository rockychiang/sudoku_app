import React, { Component } from 'react';
import { connect } from 'react-redux';
import { newGame } from '../actions/game';
import Board from '../components/Board';

class Game extends Component {
  constructor(props) {
    super(props)

    this.props.newGame();
  }

  render() {
    return (
      <div>
        <table className="board">
          <tbody>
            <Board puzzle={this.props.game.puzzle.board} />
          </tbody>
        </table>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    game: state.game
  };
}

export default connect(mapStateToProps, { newGame })(Game)
