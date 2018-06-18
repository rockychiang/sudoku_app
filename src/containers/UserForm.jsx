import React, { Component } from 'react';
import { connect } from 'react-redux';

class UserForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: ''
    }
  }

  handleInputChange = e => {
    this.setState({
      username: e.target.value
    })
  }

  handleFormSubmit = e => {
    e.preventDefault();
    debugger
    // this.props.history.push('/leaderboard')
  }

  render() {
    return (
      <div>
        <div className="dim">
        </div>
        <div className="box userform">
          <h2>Congratulations!</h2>
          <p>Please enter you name for ranking purposes</p>
          <form onSubmit={this.handleFormSubmit}>
            <input type="text" name="username" placeholder="username" value={this.state.username} onChange={this.handleInputChange} className="userform-input" />
            <br />
            <input type="submit" className="userform-submit" />
          </form>
        </div>
      </div>
    )
  }
}

export default connect(null)(UserForm)
