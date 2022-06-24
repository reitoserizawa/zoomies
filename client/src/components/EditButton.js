import React, { useState } from 'react'
import EditDogForm from './EditDogForm'
import { BiEditAlt } from 'react-icons/bi'

function EditButton({dog, handleDogEdit}) {
  const [showEdit, setShowEdit] = useState(false)

  const handleOnClick = (e) => {
    setShowEdit(true)
  }


  return (
    <div>
      {showEdit ? <EditDogForm dog={dog} handleDogEdit={handleDogEdit} setShowEdit={setShowEdit}/> : <BiEditAlt onClick={handleOnClick}/> }
    </div>
  )
}

export default EditButton