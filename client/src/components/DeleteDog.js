import React from 'react'
import { useHistory } from 'react-router-dom'

function DeleteDog({dog, handleDeleteDog}) {
    const history = useHistory()

    const handleClick = (e) => {
        console.log(e.target.id)
        fetch(`/dogs/${e.target.id}`, {
            method: "DELETE"
        })
        .then(r => r.json())
        .then(data => handleDeleteDog(data))
        history.push('/profile')
    }
  return (
    <button onClick={handleClick} id={dog.id}>delete</button>
  )
}

export default DeleteDog