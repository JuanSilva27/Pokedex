import React, { useEffect } from "react";
import usePokemon from "../hooks/usePokemon";
import { useParams } from "react-router-dom";
import { Stats } from "../components/Stats";
import { Type } from "../components/Type";
import { primerLetraMayus } from "../helpers/primerLetraMayus";
import { WeightIcon } from "../components/WeightIcon";
import { AbilityIcon } from "../components/AbilityIcon";

export const Pokemon = () => {
  const { id } = useParams();
  const { pokemon, getPokemonById, loading } = usePokemon();

  useEffect(() => {
    getPokemonById(id);
  }, [id]);

  return (
    <div className=" mt-10 mx-auto p-4 md:w-1/2 w-11/12  ">
      {loading ? (
        <p>Loading...</p>
      ) : pokemon && pokemon.stats ? (
        <>
        
        <div className="bg-white rounded-lg shadow-lg p-8 relative mt-32">
          <div className="flex items-center justify-center mb-4 relative bottom-[80px] ">
            <img
              src={pokemon.sprites.other.home.front_default? pokemon.sprites.other.home.front_default : pokemon.sprites.front_default }
              alt="Pokemon Sprite"
              className=" rounded-md h-44 absolute"
            />
          </div>
          <h1 className="text-center font-mono font-semibold text-[60px] ">
            {primerLetraMayus(pokemon.name)}
          </h1>
          <div className="flex items-center justify-center">
            {pokemon.types.map((type) => (
              <Type key={type.type.name} {...type} />
            ))}
          </div>
          <div className="mb-4 mt-4 pt-4 flex justify-around">
            <div className=" flex flex-col">
              <WeightIcon/>
              <span className="font-bold text-teal-500 text-center">Weight</span> 
              <span className="text-center font-semibold font-mono">{pokemon.weight}</span>
            </div>
            <div className="flex flex-col">
              <AbilityIcon/>
              <span className="font-bold text-pink-500 text-center">Abilities</span>
              <span className="text-center font-semibold font-mono">
              {" "}
              {pokemon.abilities
                .map((ability) => primerLetraMayus(ability.ability.name))
                .join(", ")}
              </span>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-2 text-center ">Stats</h3>
            <Stats stats={pokemon.stats} />
          </div>
        </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};
