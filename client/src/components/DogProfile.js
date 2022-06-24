import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import './DogProfile.css'
import DeleteDog from './DeleteDog'
import EditButton from './EditButton'


function DogProfile({user, handleDeleteDog}) {
    const [dog, setDog] = useState(null)
    const [updatedDog, setUpdatedDog] = useState(dog)
    const params = useParams()
    console.log(user)
    

    useEffect(() => {
        fetch(`/dogs/${params.id}`)
        .then(r => r.json())
        .then(data => setDog(data))
    },[params, updatedDog])

    
    if (!dog) return null;
    if (!user) return null

    const handleDogEdit = (newDog) => {
        setUpdatedDog(newDog)
    }


  return (
    <div id="dog-profile-background">
        <div id='space-between'>
            <div id='dog-profile'>
                <h1>{dog.name}</h1>
                <img id='dog-profile-img' src={dog.img}/>
                <br></br>
                <small className='dog-profile-text'>Breed: {dog.breed}</small>
                <small className='dog-profile-text'>Age: {dog.age}</small>
                <small className='dog-profile-text'>Size: {dog.size}</small>
                <small class='dog-profile-text'>Owner: {dog.user.first_name} {dog.user.last_name}</small>
                {dog.user.id === user.id ? 
                <div id='edit-icons'>
                    <DeleteDog dog={dog} handleDeleteDog={handleDeleteDog}/>
                    <EditButton dog={dog} handleDogEdit={handleDogEdit}/> 
                </div>
                : null}
            </div>
        </div>
    </div>
  )
}

export default DogProfile