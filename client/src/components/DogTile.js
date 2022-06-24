import React from 'react'
import { useHistory } from 'react-router-dom'
import './DogTile.css'

function DogTile({dog, height, width, isLoggedIn}) {
  const history = useHistory()
  const handleClick = (e) => {
    if (isLoggedIn){
      history.push(`/dogs/${e.target.id}`)
    }
  }

  return (
    <div>
        <img onClick={handleClick} class="dog-tile" id={dog.id} width={width} height={height} src={dog.img} title={dog.name}/>
    </div>
  )
}

export default DogTile