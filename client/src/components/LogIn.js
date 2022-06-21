import React, {useState} from 'react'

function LogIn({setUser}) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([]);

    console.log(username, password)

    function handleLogin(e) {
        e.preventDefault();
        fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
        }).then((r) => {
        if (r.ok) {
            r.json().then((user) => console.log(`user: ${user}`));
        } else {
            r.json().then((err) => console.log(`error: ${err}`));
        }
        });
    }

      

  return (
    <div>
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
    </div>
  )
}

export default LogIn