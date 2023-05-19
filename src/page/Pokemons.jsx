import React, { useContext, useEffect } from "react";
import PokemonContext from "../context/pokemonProvider";
import PokemonCard from "../components/PokemonCard";

export const Pokemons = () => {
  const { loading, pokemons, getAllPokemons } = useContext(PokemonContext);
  useEffect(() => {
    getAllPokemons();
  }, []);
  return (
    <>
      <h1 className="text-4xl font-black">Pokemons</h1>
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
