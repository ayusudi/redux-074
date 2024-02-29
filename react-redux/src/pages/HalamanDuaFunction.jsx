import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, incrementByAmount } from "../features/counterSlice"
import { useState } from "react";

export default function HalamanDuaFunction() {
  const [inputNumber, setInputNumber] = useState(0)
  const count = useSelector((state) => state.counter.count)
  const provinces = useSelector((state) => state.counter.provinces)
  const dispatch = useDispatch()

  const submitFunction = (event) => {
    event.preventDefault()
    dispatch(incrementByAmount(inputNumber))
    setInputNumber(0)
  }

  return (
    <div>
      <div style={{ margin: 'auto', padding: 10 }}>
        <h1>Function Component with Redux</h1>
        <h1>{count}</h1>
        <div style={{ display: 'flex', gap: 5 }}>
          <button onClick={() => dispatch(increment())}>+</button>
          <button onClick={() => dispatch(decrement())}>-</button>
        </div>
        <br />
        <form onSubmit={submitFunction} style={{ display: 'flex', gap: 5 }}>
          <input value={inputNumber} onChange={(e) => setInputNumber(e.target.value)} type="number" />
          <button type="submit">Add Amount</button>
        </form>
        <br />
        <Link to="/">Back to Landing Page</Link>
      </div>
      <ul>
        {provinces.map((el, i) => <li key={i}>{el.name}</li>)}
      </ul>
    </div>
  )
}