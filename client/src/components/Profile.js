import React, { useEffect } from 'react'
import Cookies from 'js-cookie'
import './Profile.css'
import DogTile from './DogTile'
import AddDogButton from './AddDogButton'

function Profile({user, isLoggedIn}) {

    if (!user) return null;
    const { id, first_name, last_name, email, img, active, username, dogs } = user


    
  return (
    <div id='profile-background'>
        <div id='profile-spacing'>
            <div id='my-profile'>
                <div id='user-info'>
                    <h1 id='username'>{username}</h1>
                    <p>name: {first_name} {last_name}</p>
                    <p>email: {email}</p>
                    <div id='dog-tiles'>
                        {dogs.length !== 0 ? 
                        <>
                            <p>My dogs</p>
                            {dogs.map((dog) => {
                                return <DogTile key={dog.id} dog={dog} height={'100px'} width={'100px'} isLoggedIn={isLoggedIn}/>
                            })}
                            <AddDogButton text={'add another dog'} />
                        </>
                    
                        : <AddDogButton text={'add a dog'}/> }
                    </div>
                </div>
                <img id="user-profile-img" src={img}/>
            </div>
        </div>
    </div>
  )
}

export default Profile

