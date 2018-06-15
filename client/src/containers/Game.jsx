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
            {console.log(this.props.puzzle.solution)}
          </tbody>
        </table>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    puzzle: state.puzzle
  };
}

export default connect(mapStateToProps, { newGame })(Game)
