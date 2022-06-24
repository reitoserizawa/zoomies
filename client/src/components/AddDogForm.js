import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import Errors from './Errors.js'
import './AddDogForm.css'

function AddDogForm({user, handleAddDog}) {
  const [formData, setFormData] = useState({
    name: "",
    breed: "",
    age: "",
    size: "",
    img: "",
    user_id: ""
  })
  const [errors, setErrors] = useState([])
  const history = useHistory()


  if (!user) return null

  

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData(() => ({ ...formData, [name]: value, user_id: user.id }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    fetch('/dogs', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData)
    })
    .then(r => {
      if (r.ok) {
        r.json().then(dog => handleAddDog(dog))
        history.push('/profile')
      } else {
        r.json().then((err) => setErrors(err.errors))
      }
    })
  }

  

  return (
    <div id="add-dog-container">
      <h1>Add your dog</h1>
      <form id="add-dog-form" onSubmit={handleSubmit}>
          <input
          type="text"
          id="name"
          autoComplete="off"
          placeholder='enter name'
          name='name'
          value={formData.name}
          onChange={handleOnChange}
          />
          <br></br>
          <input
          type="text"
          id="breed"
          autoComplete="off"
          placeholder='enter breed'
          name='breed'
          value={formData.breed}
          onChange={handleOnChange}
          />
          <br></br>
          <select id="size" name="size" value={formData.size} onChange={handleOnChange}>
            <option>Select Size</option>
            <option>Small</option>
            <option>Medium</option>
            <option>Large</option>
          </select>
          <br></br>
          <select id="age" name="age" value={formData.age} onChange={handleOnChange}>
            <option>Select Age</option>
            <option>Puppy</option>
            <option>Young</option>
            <option>Adult</option>
            <option>Senior</option>
          </select>
          <br></br>
          <input
          type="text"
          id="img"
          autoComplete="off"
          placeholder='enter image'
          name='img'
          value={formData.img}
          onChange={handleOnChange}
          />
          <br></br>
          <button id='add-dog-btn' type="submit">add dog</button>
      </form>
      { errors !== [] ? <Errors errors={errors} /> : null}
    </div>
  )
}

export default AddDogForm