import React, { Component } from 'react';
import { connect } from 'react-redux';
import { newGame } from '../actions/game';

class Game extends Component {

  componentDidMount() {
    this.props.newGame();
  }

  render() {
    return (
      <div className="box">
        <table className="table board">
          <tbody>
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
