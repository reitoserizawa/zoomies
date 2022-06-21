import React, {useState} from 'react'
import { useHistory } from 'react-router-dom'

function LogIn({user, setUser, isLoggedIn}) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([]);
    const history = useHistory()


    function handleLogin(e) {
        e.preventDefault();
        fetch("/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
        }).then((r) => {
        if (r.ok) {
            r.json().then((user) => setUser(user));
            history.push('/')
        } else {
            r.json().then((err) => setErrors(err.error));
        }
        });
        setUsername("")
        setPassword("")
    }




      

  return (
    <div>
        { isLoggedIn ? <h1>Hello, {user.first_name}</h1> : null}
        <form id="login-form" onSubmit={handleLogin}>
            <h1>Login</h1>
            {/* <label htmlFor="username">Username</label> */}
            <input
            type="text"
            id="username"
            autoComplete="off"
            placeholder='username'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            />
            {/* <label htmlFor="password">Password</label> */}
            <input
            type="password"
            id="password"
            autoComplete="current-password"
            placeholder='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Login</button>
        </form>
        <small>Don't have an account? <a href="/signup">Register</a></small>
    </div>
  )
}

export default LogIn