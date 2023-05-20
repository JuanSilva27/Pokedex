import React, { useEffect } from "react";
import usePokemon from "../hooks/usePokemon";
import { useParams } from "react-router-dom";

export const Pokemon = () => {
  const { id } = useParams();
  const { pokemon, getPokemonById, loading } = usePokemon();

  useEffect(() => {
    getPokemonById(id);
  }, [id]);
  console.log(pokemon);

  return (
    <div className="container mx-auto p-4">
      {!loading ? (
        <div className="bg-white rounded-lg shadow-lg p-4">
          <h2 className="text-2xl font-bold mb-2">{pokemon.name}</h2>
          <h3 className="text-lg font-medium mb-2">Stats:</h3>
          <ul className="list-disc pl-4">
            {pokemon.stats.map((stat) => (
              <li key={stat.stat.name}>
                {stat.stat.name}: {stat.base_stat}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};
