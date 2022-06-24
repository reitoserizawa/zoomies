import React from 'react'
import { useHistory } from 'react-router-dom'
import { MdDeleteOutline } from 'react-icons/md';

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
    <MdDeleteOutline onClick={handleClick} id={dog.id}/>
  )
}

export default DeleteDog