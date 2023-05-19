import React from 'react'

export const Type = (type) => {

    const typesColors ={
        normal:"",
        fighting:"",

    }



  return (
    <span key={type.type.name} className='bg-green-600 m-2 p-1'>{type.type.name}</span>
  )
}
