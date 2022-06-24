import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import Errors from './Errors.js'

function SignUp({setUser}) {
    const [formData, setFormData] = useState({
        first_name: "",
        last_name: "",
        email: "",
        img: "",
        active: false,
        username: "",
        password: "",
        password_confirmation: ""
    })
    const [errors, setErrors] = useState([]);
    const history = useHistory()

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    }

    console.log(errors)

    const handleSignup = (e) => {
        e.preventDefault();
        setErrors([]);
        fetch("/signup", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
        }).then((r) => {
        if (r.ok) {
            r.json().then((user) => setUser(user));
            setFormData({
                first_name: "",
                last_name: "",
                email: "",
                img: "",
                active: false,
                username: "",
                password: "",
                password_confirmation: ""
            })
            history.push('/dog_parks')
        } else {
            r.json().then((err) => setErrors(err.errors));
        }
        });

        
    }
// https://static01.nyt.com/images/2022/05/17/well/12-Well-NL-Dogs/12-Well-NL-Dogs-superJumbo.jpg

  return (
        <>
        <div style={{width: "100%",
        height: "93.5vh",
        opacity: "0.8",
        objectFit: "cover",
        backgroundImage: "url('https://wallpaperaccess.com/full/1669361.jpg')",
        }}>

            <div class="logo mb-3">
				<div class="col-md-12 text-center" style={{paddingTop:"1%"}}>
					<h1>Sign Up</h1>
				</div>
			</div>
        
        <form id="signup-form" onSubmit={handleSignup} class="container-fluid" style={{position:"relative"}}>
            <div style={{position: "absolute", left:"30%", right:"30%", border:"1px", borderStyle:"solid", paddingTop:"3%", paddingBottom: "2%", borderColor:"black", backgroundColor: "white", borderRadius: "5px"}}>

                <div class="row justify-content-md-center">
                    <label class="col-sm-2 col-form-label" for="inputFirstName">First Name</label>
                        <div class="col-auto">
                            <input
                            class="form-control"
                            type="text"
                            id="first_name"
                            autoComplete="off"
                            placeholder='first name'
                            name='first_name'
                            value={formData.first_name}
                            onChange={handleOnChange}
                            />
                        </div>
                </div>

                <hr/>
                
                <div class="row justify-content-md-center">
                    <label class="col-sm-2 col-form-label" for="inputLastName">Last Name</label>
                        <div class="col-auto">
                            <input
                            class="form-control"
                            type="text"
                            id="last_name"
                            autoComplete="off"
                            placeholder='last name'
                            name='last_name'
                            value={formData.last_name}
                            onChange={handleOnChange}
                            />
                        </div>
                </div>

                <hr/>

                <div class="row justify-content-md-center">
                    <label class="col-sm-2 col-form-label" for="inputEmail">Email</label>

                    <div class="col-auto">
                        <input
                        class="form-control"
                        type="text"
                        id="email"
                        autoComplete="off"
                        placeholder='email'
                        name='email'
                        value={formData.email}
                        onChange={handleOnChange}
                        />
                    </div>

                </div>

                <hr/>

                <div class="row justify-content-md-center">

                    <label class="col-sm-2 col-form-label" for="inputImage">Image</label>
                    <div class="col-auto">
                        <input
                        class="form-control"
                        type="text"
                        id="img"
                        autoComplete="off"
                        placeholder='profile image url'
                        name='img'
                        value={formData.img}
                        onChange={handleOnChange}
                        />
                    </div>
                </div>

                <hr/>

                <div class="row justify-content-md-center">

                    <label class="col-sm-2 col-form-label" for="inputUsername">Username</label>

                    <div class="col-auto">
                        <input
                        class="form-control"
                        type="text"
                        id="username"
                        autoComplete="off"
                        placeholder='username'
                        name='username'
                        value={formData.username}
                        onChange={handleOnChange}
                        />
                    </div>
                </div>
                
                <hr/>

                <div class="row justify-content-md-center">

                    <label class="col-sm-2 col-form-label" for="inputPassword">Password</label>


                    <div class="col-auto">
                        <input
                        class="form-control"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        placeholder='password'
                        name='password'
                        value={formData.password}
                        onChange={handleOnChange}
                        />
                    </div>
                </div>

                <hr />

                <div class="row justify-content-md-center">
                    <label class="col-sm-2 col-form-label" for="inputPassword">Confirm Password</label>

                    <div class="col-auto">
                        <input
                        class="form-control"
                        type="password"
                        id="password_confirmation"
                        autoComplete="current-password"
                        placeholder='password confirmation'
                        name='password_confirmation'
                        value={formData.password_confirmation}
                        onChange={handleOnChange}
                        />
                    </div>
                </div>
                <hr />
            <button type="submit" class="btn btn-outline-primary">Sign Up</button>


            </div>
        </form>
        { errors !== [] ? <Errors errors={errors} /> : null}

        </div>
    </>
  )
}

export default SignUp


// t.string "first_name"
// t.string "last_name"
// t.string "email"
// t.string "img"
// t.boolean "active"
// t.string "username"
// t.string "password_digest"
