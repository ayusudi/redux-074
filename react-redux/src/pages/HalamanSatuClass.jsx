import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {
  increment,
  decrement,
  incrementByAmount
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

  submitFunction = (event) => {
    event.preventDefault()
    this.props.dispatch(incrementByAmount(this.state.incrementAmount))
  }

  render() {
    return (
      <div style={{ margin: 'auto', padding: 10 }}>
        <h1>Class Component with Redux</h1>
        <h1>{this.props.counter.count}</h1>
        <div style={{ display: 'flex', gap: 5 }}>
          <button onClick={() => this.props.dispatch(increment())}>+</button>
          <button onClick={() => this.props.dispatch(decrement())}>-</button>
        </div>
        <br />
        <form onSubmit={this.submitFunction} style={{ display: 'flex', gap: 5 }}>
          <input value={this.state.incrementAmount} onChange={(e) => this.setIncrement(e.target.value)} type="number" />
          <button>Add Amount</button>
        </form>
        <br />
        <Link to="/">Back to Landing Page</Link>
        <ul>
          {this.props.counter.provinces.map((el, i) => <li key={i}>{el.name}</li>)}
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
  const counter = state.counter;
  return {
    counter,
    provinces: state.provinces
  };
}

export default connect(mapStateToProps)(HalamanSatuClass);