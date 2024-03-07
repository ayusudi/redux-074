import { useDispatch, useSelector } from "react-redux";
import { fetchProvinces } from "./counterSlice"
import { Link } from "react-router-dom";

const CounterList = () => {
  const provinces = useSelector(state => state.counter.provinces)
  const dispatch = useDispatch()
  const doFetchProvinces = () => dispatch(fetchProvinces())
  return (
    <div>
      <Link to="/">Back</Link>
      <br />
      <br />
      <button onClick={doFetchProvinces}>Fetch Data</button>
      <h1>Hello World</h1>
      {
        provinces.map((el, i) => <p key={i}>{el.name}</p>)
      }
    </div>
  )
}
export default CounterList