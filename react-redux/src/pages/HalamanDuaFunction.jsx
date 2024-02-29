import { Link } from "react-router-dom";

export default function HalamanDuaFunction() {
  return (
    <div>
      <div style={{ margin: 'auto', padding: 10 }}>
        <h1>Function Component with Redux</h1>
        <h1>0</h1>
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
    </div>
  )
}