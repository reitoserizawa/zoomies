import React, {useState} from 'react'
import { useHistory } from 'react-router-dom'
import Errors from './Errors.js'

function LogIn({user, setUser, isLoggedIn, setIsLoggedIn, setIsCheckedIn}) {
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
            r.json().then((user) => {
                setUser(user)
                console.log(user.check_ins)
                user.check_ins.length === 0 ? setIsCheckedIn(false) : setIsCheckedIn(true)
            });
            history.push('/')
            setUsername("")
            setPassword("")
            setIsLoggedIn(true)
        } else {
            r.json().then((err) => setErrors(err.errors));
        }
        });
        
    }

    console.log(errors)




      

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
        { errors !== [] ? <Errors errors={errors} /> : null}
        <small>Don't have an account? <a href="/signup">Register</a></small>
    </div>
  )
}

export default LogIn