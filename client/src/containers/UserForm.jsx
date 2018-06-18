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
        <div className="userform box ">
          <form>
            <input type="text" name="username" placeholder="username" value={this.state.username} onChange={this.handleInputChange} />
            <input type="submit" />
          </form>
        </div>
      </div>
    )
  }
}
