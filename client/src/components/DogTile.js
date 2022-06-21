import React from 'react'
import './DogTile.css'

function DogTile({dog}) {
  return (
    <div>
        <img id="dog-tile" width="100px" src={dog.img} title={dog.name}/>
    </div>
  )
}

export default DogTile