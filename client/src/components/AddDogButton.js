import React from 'react'
import { useHistory } from 'react-router-dom'

function AddDogButton({text}) {
  const history = useHistory()

  const handleOnClick = () => {
    history.push('/add_dog')
  }
  return (
    <button onClick={handleOnClick} >{text}</button>
  )
}

export default AddDogButton