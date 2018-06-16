import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateBoard } from '../actions/game'

class InputTd extends Component {
  constructor(props) {
    super(props)

    this.state = {
      value: this.props.num
    }
  }

  handleChange = (e) => {
    const { value, id } = e.target
    if ((value > 0 && value < 10) || value === "" ) {
      this.props.updateBoard(id, value);
    }
  }

  render() {
    const { x, y, boxId } = this.props

    return (
      <td className={`x${x} y${y}`}>
        <input type='number' maxLength="1" min="1" max="9" autoComplete="off" id={boxId} value={this.state.value} onChange={this.handleChange}/>
      </td>
    )
  }
}

export default connect(null, { updateBoard })(InputTd);
