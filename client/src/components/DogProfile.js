import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import './DogProfile.css'
import DeleteDog from './DeleteDog'

function DogProfile({user, handleDeleteDog}) {
    const [dog, setDog] = useState(null)
    const params = useParams()
    console.log(user)
    

    useEffect(() => {
        fetch(`/dogs/${params.id}`)
        .then(r => r.json())
        .then(data => setDog(data))
    },[params])

    
    if (!dog) return null;
    if (!user) return null


  return (
    <div id='dog-profile'>
        <h1>{dog.name}</h1>
        <img id='dog-profile-img' src={dog.img}/>
        <br></br>
        <small className='dog-profile-text'>breed: {dog.breed}</small>
        <small className='dog-profile-text'>size: {dog.size}</small>
        <small class='dog-profile-text'>owner: {dog.user.first_name} {dog.user.last_name}</small>
        {dog.user.id === user.id ? <DeleteDog dog={dog} handleDeleteDog={handleDeleteDog}/> : null}

    </div>
  )
}

export default DogProfile