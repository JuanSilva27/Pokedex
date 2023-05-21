import React, { useContext, useEffect, useState } from "react";
import PokemonCard from "../components/PokemonCard";
import usePokemon from "../hooks/usePokemon";
import { FilterIcon } from "../components/FilterIcon";
import { FilterBar } from "../components/FilterBar";
import { DeleteIcon } from "../components/DeleteIcon";
import { DeleteThisIcon } from "../components/DeleteThisIcon";

export const Pokemons = () => {
  const { loading, pokemons, getAllPokemons } = usePokemon();
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [showFilterBar, setShowFilterBar] = useState(false);

  const handleTypeSelection = (isChecked, selectedType) => {


    if (isChecked) {
      setSelectedTypes([...selectedTypes, selectedType]);
    } else {
      setSelectedTypes(selectedTypes.filter((type) => type !== selectedType));
    }
  };

  const filteredPokemons = pokemons.filter(
    (pokemon) =>
      selectedTypes.length === 0 ||
      pokemon.types.some((type) => selectedTypes.includes(type.type.name))
  );
  useEffect(() => {
    getAllPokemons();
  }, []);

  const handleFilterIconClick = () => {
    setShowFilterBar(!showFilterBar);
  };

  return (
    <>
      <div className="flex justify-between">
        <div onClick={handleFilterIconClick}>
          <FilterIcon />
        </div>
        <div>
          <DeleteIcon />
        </div>
      </div>
      
      <div className={`${!showFilterBar ? "hidden" : null}`}>
        <FilterBar onTypeSelection={handleTypeSelection} />
      </div>

      <div
        className={`bg-white p-5 shadow mt-10 rounded-md flex flex-wrap ${
          loading ? "justify-center" : null
        }`}
      >
        {loading ? (
          <img src="/loadingPokeball.gif" alt="" />
        ) : filteredPokemons.length > 0 ? (
          filteredPokemons.map((pokemon, index) => (
            <div
              key={pokemon.id + index}
              className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 mb-4 px-2"
            >
              <DeleteThisIcon/>
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
