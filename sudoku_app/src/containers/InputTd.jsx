import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateBoard } from '../actions/game'

class InputTd extends Component {

  handleChange = (e) => {
    const { value, id } = e.target
    if ( (value > 0 && value < 10) || value === "" ) {
      this.props.updateBoard(id, value);
    }
  }

  render() {
    const { x, y, boxId, disabled } = this.props

    return (
      <td className={`x${x} y${y}`}>
        <input
          type='text'
          maxLength="1"
          autoComplete="off"
          id={boxId}
          value={this.props.num}
          onChange={this.handleChange}
          disabled={disabled}
        />
      </td>
    )
  }
}

export default connect(null, { updateBoard })(InputTd);
