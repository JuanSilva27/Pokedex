import React, { useContext } from 'react'
import PokemonContext from '../context/pokemonProvider'

export const usePokemon = () => {
  return useContext(PokemonContext)
}

export default usePokemon