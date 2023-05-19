import  axios from "axios";

export const pokemonAxios = axios.create({
  baseURL : `https://pokeapi.co/api/v2/` 
}) 


