import React, { Component } from "react";
export default class Room extends Component {
  constructor(props) {
    this.state = {
      votesToSkip: 2,
      guestCanPause: false,
      isHost: false,
    };
  }

  render() {
    return (
      <div>
        <p>Votes: {this.state.votesToSkip}</p>
        <p>Guest Can Pause: {this.setState.guestCanPause}</p>
        <p>HOst:{this.state.isHost}</p>
      </div>
    );
  }
}
