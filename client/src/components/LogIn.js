import React, {useState} from 'react'
import { useHistory } from 'react-router-dom'
import Errors from './Errors.js'

function LogIn({user, setUser, isLoggedIn, setIsLoggedIn}) {
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
            history.push('/profile')
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
    <>
    
    <div style={{width: "100vw",
        height: "93.5vh",
        opacity: "0.8",
        objectFit: "contain",
        backgroundImage: "url('https://cdn.theatlantic.com/thumbor/D7oIBMP-jlq-lwsJhiMci490Ze0=/0x0:2809x1580/1600x900/media/img/mt/2022/04/GettyImages_515303226/original.jpg')",
        }}>

        { isLoggedIn ? <h1>Hello, {user.first_name}</h1> : null}
        <div class="container">
        <div class="row">
			<div class="col-md-5 mx-auto">
			<div id="first">
				<div class="myform form ">
					 <div class="logo mb-3"  style={{padding:"3%"}}>
						 <div class="col-md-12 text-center">
							<h1>Login</h1>
						 </div>
					</div>

                   <form action="" method="post" name="login"  onSubmit={handleLogin} style={{position:"relative"}}>
                        <div style={{backgroundColor: "white", padding:"5%", borderStyle:"solid", borderRadius:"1%"}}>
                           <div class="form-group">
                              <label for="exampleInputEmail1">Username</label>
                              <input type="text" name="username" class="form-control" id="email" aria-describedby="usernameHelp" placeholder="Enter Username" value={username} onChange={(e) => setUsername(e.target.value)}/>
                           </div>
                           <hr class="hr-or"/>
                           <div class="form-group">
                              <label for="exampleInputEmail1">Password</label>
                              <input type="password" name="password" id="password"  class="form-control" aria-describedby="emailHelp" placeholder="Enter Password" autoComplete="current-password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                           </div>
                           <hr class="hr-or"/>
                           <div class="col-md-12 text-center ">
                              <button type="submit" class=" btn btn-block mybtn btn-primary tx-tfm">Login</button>
                           </div>
                           <div class="col-md-12 ">
                              <div class="login-or">
                                 <hr class="hr-or"/>
                                 <span class="span-or">or</span>
                              </div>
                           </div>
                           <div class="form-group">
                              <p class="text-center">Don't have account? <a href="/signup" id="signup">Sign up here</a></p>
                           </div>
                        </div>
                    </form>
                </div>
                </div>
			</div>
			</div>
        </div>
        {/* <form id="login-form" onSubmit={handleLogin}>
            <h1>Login</h1>
            <input
            type="text"
            id="username"
            autoComplete="off"
            placeholder='username'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            />
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
        <small>Don't have an account? <a href="/signup">Register</a></small> */}
        </div>
    </>
  )
}

export default LogIn