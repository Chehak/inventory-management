import React from 'react';
import formStructure from '../utils/types.json'

const Type = () => {
  const newForm = formStructure.filter((data)=>data.id==1)
  console.log(formStructure);
  return (
    <div>Type</div>
  )
}

export default Type