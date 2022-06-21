import React, { useState, useEffect } from 'react'
import DogTile from './DogTile.js'

function DogContainer() {
    const [dogs, setDogs] = useState([])

    useEffect(() => {
        fetch("/dogs")
        .then(r => r.json())
        .then(dogs => setDogs(dogs))
    }, [])

    const renderDogs = dogs.map((dog) => {
        return <DogTile key={dog.id} dog={dog} />
    })

  return (
    <div>{renderDogs}</div>
  )
}

export default DogContainer