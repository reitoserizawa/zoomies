import React, { useState } from 'react'
import EditDogForm from './EditDogForm'

function EditButton({dog, handleDogEdit}) {
  const [showEdit, setShowEdit] = useState(false)

  const handleOnClick = (e) => {
    setShowEdit(true)
  }


  return (
    <div>
      {showEdit ? <EditDogForm dog={dog} handleDogEdit={handleDogEdit} setShowEdit={setShowEdit}/> : <button onClick={handleOnClick}>edit</button> }
    </div>
  )
}

export default EditButton