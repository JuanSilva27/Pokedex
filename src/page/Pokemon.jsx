import React, { useEffect } from "react";
import usePokemon from "../hooks/usePokemon";
import { useParams } from "react-router-dom";
import { Stats } from "../components/Stats";
import { Type } from "../components/Type";

export const Pokemon = () => {
  const { id } = useParams();
  const { pokemon, getPokemonById, loading } = usePokemon();

  useEffect(() => {
    getPokemonById(id);
  }, [id]);

  return (
    <div className=" mt-10 mx-auto p-4  max-w-2xl">
      {loading ? (
        <p>Loading...</p>
      ) : pokemon && pokemon.stats ? (
        <div className="bg-white rounded-lg shadow-lg p-8 relative mt-32">
          <div className="flex items-center justify-center mb-4 relative bottom-[80px] ">
            <img
              src={pokemon.sprites.other.home.front_default}
              alt="Pokemon Sprite"
              className=" rounded-md h-44 absolute"
            />
          </div>
          <h1 className="text-center uppercase font-mono font-semibold text-[60px]">{pokemon.name}</h1>
          <div className="flex items-center justify-center">
            {pokemon.types.map((type) => (
              <Type key={type.type.name} {...type} />
            ))}
          </div>
          <div className="mb-4 mt-4 pt-4">
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
          <h3 className="text-x1 font-semibold mb-2">Stats:</h3>
          <Stats stats={pokemon.stats} />
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};
