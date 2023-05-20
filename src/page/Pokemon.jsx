import React, { useEffect } from "react";
import usePokemon from "../hooks/usePokemon";
import { useParams } from "react-router-dom";
import { Stats } from "../components/Stats";

export const Pokemon = () => {
  const { id } = useParams();
  const { pokemon, getPokemonById, loading } = usePokemon();

  useEffect(() => {
    getPokemonById(id);
  },[id]);


  return (
    <div className="container mx-auto p-4">
      {loading ? (
        <p>Loading...</p>
      ) : pokemon  && pokemon.stats? (
        <div className="bg-white rounded-lg shadow-lg p-4">
          <h2 className="text-2xl font-bold mb-2">{pokemon.name}</h2>
          <h3 className="text-lg font-medium mb-2">Stats:</h3>
          <Stats stats={pokemon.stats}/>
        </div>
      ):(<p>Loading...</p>)}
    </div>
  );
};
