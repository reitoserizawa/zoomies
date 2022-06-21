import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

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
            history.push('/home')
        } else {
            r.json().then((err) => setErrors(err.errors));
        }
        });

        
    }


  return (
    <div>
        <form id="signup-form" onSubmit={handleSignup}>
            <h1>Register</h1>
            <input
            type="text"
            id="first_name"
            autoComplete="off"
            placeholder='first name'
            name='first_name'
            value={formData.first_name}
            onChange={handleOnChange}
            />
            <input
            type="text"
            id="last_name"
            autoComplete="off"
            placeholder='last name'
            name='last_name'
            value={formData.last_name}
            onChange={handleOnChange}
            />
            <input
            type="text"
            id="email"
            autoComplete="off"
            placeholder='email'
            name='email'
            value={formData.email}
            onChange={handleOnChange}
            />
            <input
            type="text"
            id="img"
            autoComplete="off"
            placeholder='profile image url'
            name='img'
            value={formData.img}
            onChange={handleOnChange}
            />
            <input
            type="text"
            id="username"
            autoComplete="off"
            placeholder='username'
            name='username'
            value={formData.username}
            onChange={handleOnChange}
            />
            <input
            type="password"
            id="password"
            autoComplete="current-password"
            placeholder='password'
            name='password'
            value={formData.password}
            onChange={handleOnChange}
            />
            <input
            type="password"
            id="password_confirmation"
            autoComplete="current-password"
            placeholder='password confirmation'
            name='password_confirmation'
            value={formData.password_confirmation}
            onChange={handleOnChange}
            />
            <button type="submit">SignUp</button>
        </form>
    </div>
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