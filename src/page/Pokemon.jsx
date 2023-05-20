import React, { useEffect } from "react";
import usePokemon from "../hooks/usePokemon";
import { useParams } from "react-router-dom";
import { Stats } from "../components/Stats";

export const Pokemon = () => {
  const { id } = useParams();
  const { pokemon, getPokemonById, loading } = usePokemon();

  useEffect(() => {
    getPokemonById(id);
  }, [id]);

  return (
    <div className="container mx-auto p-4 bg-gray-100 max-w-2xl">
      {loading ? (
        <p>Loading...</p>
      ) : pokemon && pokemon.stats ? (
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center justify-center mb-4">
            <img
              src={pokemon.sprites.other.home.front_default}
              alt="Pokemon Sprite"
              className=" rounded-md h-44"
            />
          </div>
          <div className="mb-4">
            <p className="text-gray-600">
              <span className="font-bold">Weight:</span> {pokemon.weight}
            </p>
            <p className="text-gray-600">
              <span className="font-bold">Abilities:</span>{" "}
              {pokemon.abilities
                .map((ability) => ability.ability.name)
                .join(", ")}
            </p>
          </div>
          <h2 className="text-xl font-semibold mb-2 uppercase">{pokemon.name}</h2>
          <h3 className="text-x1 font-semibold mb-2">Stats:</h3>
          <Stats stats={pokemon.stats} />
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};
