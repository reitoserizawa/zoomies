import React, { useEffect } from 'react'
import Cookies from 'js-cookie'
import './Profile.css'
import DogTile from './DogTile'
import AddDogButton from './AddDogButton'

function Profile({user, setUser}) {

    if (!user) return null;
    const { id, first_name, last_name, email, img, active, username, dogs } = user

    console.log(`dogs: ${dogs}`)
    console.log(dogs)


    // console.log(`dogs: ${dogs}`)
    // if(dogs){

    // }

    // const renderDogs = 
    
  return (
    <div id='my-profile'>
        <div id='user-info'>
            <h1 id='username'>{username}</h1>
            <p>name: {first_name} {last_name}</p>
            <p>email: {email}</p>
            {dogs.length !== 0 ? 
            <>
                <p>My dogs</p>
                {dogs.map((dog) => {
                    return <DogTile key={dog.id} dog={dog} height={'100px'} width={'100px'}/>
                })}
                <AddDogButton text={'add another dog'}/>
            </>
           
            : <AddDogButton text={'add a dog'}/> }
        </div>
        <img id="user-profile-img" src={img}/>
    </div>
  )
}

export default Profile

