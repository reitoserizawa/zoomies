import React, { useState } from 'react'
import "./EditDogForm.css"

function EditDogForm({dog, handleDogEdit, setShowEdit}) {
    const [formData, setFormData] = useState({})
    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setFormData(() => ({ ...formData, [name]: value}))
        }
        console.log(dog)
    console.log(formData)
    const handleSubmit = (e) => {
        e.preventDefault()
        fetch(`/dogs/${dog.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
        .then(r => r.json())
        .then(dog => {
            handleDogEdit(dog)
            setShowEdit(false)
        })
        setFormData({})
    }
  return (
    <div id="edit-dog-form">
        <form onSubmit={handleSubmit}> 
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
                <button id='edit-button' type="submit">Save</button>
        </form>
    </div>
  )
}

export default EditDogForm