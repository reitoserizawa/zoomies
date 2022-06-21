import React from 'react'
import './DogTile.css'

function DogTile({dog, height, width}) {
  return (
    <div>
        <img id="dog-tile" width={width} height={height} src={dog.img} title={dog.name}/>
    </div>
  )
}

export default DogTile