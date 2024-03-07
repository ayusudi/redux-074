import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div>
      <h1>Latihan Redux</h1>
      <br></br>
      <Link to="/class">Contoh Class Component</Link>
      <br></br>
      <Link to="/function">Contoh Function Component</Link>
      <br></br>
      <Link to="/list">Contoh Counter List</Link>
    </div>
  )
}