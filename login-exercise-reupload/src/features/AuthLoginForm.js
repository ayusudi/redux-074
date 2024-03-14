import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authLoginAPI } from "./authSlice";
function AuthLoginForm() {
  const authState = useSelector((state) => state.auth)
  const dispatch = useDispatch()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const passwordChange = (event) => {
    setPassword(event.target.value)
  }

  const doSubmit = (event) => {
    event.preventDefault()
    console.log(email, password);
    dispatch(authLoginAPI({ email, password }))
    setEmail('')
    setPassword('')
  }

  return (
    <form onSubmit={doSubmit}>
      <div>
        <label>Email</label> <br />
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div>
        <label>Password</label> <br />
        <input type="password" value={password} onChange={passwordChange} />
      </div>
      <br />
      <button type="submit">Login</button>
      <div>
        {authState.errorMessage && <p style={{ color: "red" }}>{authState.errorMessage}</p>}
        {authState.isLoginPending && <p>Loading...</p>}
        {authState.isLoginSuccess && <p style={{ color: "green" }}>Hello! {authState.user.email}</p>}
      </div>
    </form>
  )
}

export default AuthLoginForm