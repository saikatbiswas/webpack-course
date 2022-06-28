import React, { Component } from "react";
import { hot } from "react-hot-loader";
import styles from"../main.css";
// import { css } from "@emotion/css";

const red = "#f00";

// const className = css`
//   color:${red}
// `

// const P = props => (
//   <p
//     css={{
//       margin: 0,
//       fontSize: 12,
//       lineHeight: '1.5',
//       fontFamily: 'sans-serif',
//       color: red
//     }}
//     {...props} // <- props contains the `className` prop
//   />
// )

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
        {/* Module */}
        {/* <h2 className={styles.counter}>Counting: {this.state.count}</h2> */}

        {/* Emotion/css */}
        {/* <h2 className={className}>Counting: {this.state.count}</h2> */}

        {/* React emotion */}
        <h2 >Counting: {this.state.count}</h2>

      </>
    );
  }
}

export default hot(module)(Counter);
