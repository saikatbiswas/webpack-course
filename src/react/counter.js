import React, { Component } from "react";
import { hot } from "react-hot-loader";

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  updateCount() {
    this.setState({
      count: this.state.count + 1,
    });
  }
  render() {
    console.log(this.state);
    return (
      <>
        <button onClick={this.updateCount.bind(this)}>Change Count</button>
        <h2>Counting: {this.state.count}</h2>
      </>
    );
  }
}

export default hot(module)(Counter);
