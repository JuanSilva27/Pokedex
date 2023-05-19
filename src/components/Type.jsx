import React from 'react'
const typesColors ={
  normal:"bg-type-normal",
  fighting:"bg-type-fighting",
  flying:"bg-type-flying",
  poison:"bg-type-poison",
  ground:"bg-type-ground",
  rock:"bg-type-rock",
  bug:"bg-type-bug",
  ghost:"bg-type-ghost",
  steel:"bg-type-steel",
  fire:"bg-type-fire",
  water:"bg-type-water",
  grass:"bg-type-grass",
  electric:"bg-type-electric",
  psychic:"bg-type-psychic",
  ice:"bg-type-ice",
  dragon:"bg-type-dragon",
  dark:"bg-type-dark",
  fairy:"bg-type-fairy",
  unknown:"bg-type-unknown",
  shadow:"bg-type-shadow",
}


export const Type = (type) => {
    const typeName= type.type.name
  return (
    <span key={type.type.name} className={`${typesColors[typeName]} m-2 p-1 text-white rounded-2xl w-1/2 text-center font-bold uppercase`}>{typeName}</span>
  )
}
