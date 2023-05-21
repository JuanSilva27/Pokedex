import React, { useContext, useEffect } from "react";
import PokemonCard from "../components/PokemonCard";
import usePokemon from "../hooks/usePokemon";
import { FilterIcon } from "../components/FilterIcon";

export const Pokemons = () => {
  const { loading, pokemons, getAllPokemons } = usePokemon();
  useEffect(() => {
    getAllPokemons();
  }, []);
  return (
    <>
      <FilterIcon></FilterIcon>
      <div className={`bg-white p-5 shadow mt-10 rounded-md flex flex-wrap ${loading? "justify-center": null}`}>
        {loading ? (
          <img src="/loadingPokeball.gif" alt="" />
        ) : pokemons.length ? (
          pokemons.map((pokemon) => (
            <div key={pokemon.id+1} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 mb-4 px-2">
              <PokemonCard key={pokemon.id} pokemon={pokemon} />
            </div>
          ))
        ) : (
          <p className="bg-red-700">no hay pokemons </p>
        )}
      </div>
    </>
  );
};
