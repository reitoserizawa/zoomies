import React, { useState, useEffect } from 'react'
import DogTile from './DogTile.js'
import './DogContainer.css'

function DogContainer({dogs, isLoggedIn}) {

    const renderDogs = dogs.map((dog) => {
        return <DogTile key={dog.id} dog={dog} height={'200px'} width={'200px'} isLoggedIn={isLoggedIn}/>
    })

  return (
    <div id='list-of-dogs'>
      {renderDogs}
    </div>
  )
}

export default DogContainer