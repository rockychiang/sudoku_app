import React, { Component } from 'react';
import { connect } from 'react-redux';

export default class UserForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: ''
    }
  }

  handleInputChange(e) {
    this.setState({
      user: e.target.value
    })
  }

  render() {
    return (
      <div>
        <div className="dim">
        </div>
        <div className="box userform">
          <h2>Congratulations!</h2>
          <p>Please enter you name for ranking purposes</p>
          <form>
            <input type="text" name="username" placeholder="username" value={this.state.username} onChange={this.handleInputChange} />
            <br />
            <input type="submit" />
          </form>
        </div>
      </div>
    )
  }
}
