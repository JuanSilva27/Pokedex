import React from 'react'

export const DeleteThisIcon = ({showDeleteIcon, pokemonId,pokemons, updateFilteredPokemons}) => {
    const handleOnClick = ()=>{
      updateFilteredPokemons ( pokemons.filter((pokemon)=>pokemon.id !== pokemonId))
        console.log(pokemons)
    }
  return (
    <>
    <svg
    baseProfile="tiny"
    viewBox="0 0 24 24"
    fill="currentColor"
    height="2.5em"
    width="2.5em"
    className={`${!showDeleteIcon? "hidden" : null} absolute text-red-500 cursor-pointer `}
    onClick={handleOnClick}
    
  >
    <path d="M12 4c-4.419 0-8 3.582-8 8s3.581 8 8 8 8-3.582 8-8-3.581-8-8-8zm3.707 10.293a.999.999 0 11-1.414 1.414L12 13.414l-2.293 2.293a.997.997 0 01-1.414 0 .999.999 0 010-1.414L10.586 12 8.293 9.707a.999.999 0 111.414-1.414L12 10.586l2.293-2.293a.999.999 0 111.414 1.414L13.414 12l2.293 2.293z" />
  </svg></>
  )
}
