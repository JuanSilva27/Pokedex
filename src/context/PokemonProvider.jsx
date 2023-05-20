import React, { createContext, useState } from "react";
import {pokemonAxios} from "../../config/pokemonAxios"
import axios from "axios";


const PokemonContext = createContext()

const PokemonProvider = ({children})=>{
    const [pokemons, setPokemons] = useState([]);
    const [loading, setLoading] = useState(true);
    const [pokemon, setPokemon] = useState([])


    const getAllPokemons = async ()=>{
        setLoading(true)
        try {
            const {data} =await pokemonAxios.get("pokemon?limit=200&offset=0")
            const {results} = data
            
            const promises = results.map(async(pokemon)=>{
                const {data} = await axios(pokemon.url)
                return data
            })

            const result = await Promise.all(promises)
            setPokemons(result)
        } catch (error) {
            console.log(error)
        } finally{
            setLoading(false)
        }
    }

    const getPokemonById = async (id)=>{
        try {
            const {data} = await pokemonAxios(`pokemon/${id}`)
            setPokemon(data)
            console.log(pokemon)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <PokemonContext.Provider value={{
            loading,
            getAllPokemons,
            pokemons,
            getPokemonById,
            pokemon
        }}> 


            {children}
        </PokemonContext.Provider>
    )

    

}

export {PokemonProvider}

export default PokemonContext