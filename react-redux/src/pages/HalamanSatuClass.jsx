import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {
  increment,
  decrement
} from "../features/counterSlice"

class HalamanSatuClass extends React.Component {
  state = {
    incrementAmount: 0
  }

  setIncrement = (val) => {
    this.setState({
      incrementAmount: Number(val) || 0
    })
  }

  render() {
    return (
      <div style={{ margin: 'auto', padding: 10 }}>
        <h1>Class Component with Redux</h1>
        <h1>{this.props.counter.count}</h1>
        <div style={{ display: 'flex', gap: 5 }}>
          <button>+</button>
          <button>-</button>
        </div>
        <br />
        <form style={{ display: 'flex', gap: 5 }}>
          <input type="number" />
          <button>Add Amount</button>
        </form>
        <br />
        <Link to="/">Back to Landing Page</Link>
      </div>
    )
  }
}
function mapStateToProps(state) {
  const counter = state.counter;
  return {
    counter
  };
}
export default connect(mapStateToProps)(HalamanSatuClass);