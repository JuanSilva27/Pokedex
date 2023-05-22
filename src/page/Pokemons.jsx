import React, { useContext, useEffect, useState } from "react";
import PokemonCard from "../components/PokemonCard";
import usePokemon from "../hooks/usePokemon";
import { FilterIcon } from "../components/FilterIcon";
import { FilterBar } from "../components/FilterBar";
import { DeleteIcon } from "../components/DeleteIcon";

export const Pokemons = () => {
  const { loading, pokemons, getAllPokemons } = usePokemon();
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [showFilterBar, setShowFilterBar] = useState(false);
  const [showDeleteThisIcon, setShowDeleteThisIcon] = useState(false);
  const [filteredPokemons, setFilteredPokemons] = useState([]);

  useEffect(() => {
    setFilteredPokemons(
      pokemons.filter(
        (pokemon) =>
          selectedTypes.length === 0 ||
          pokemon.types.some((type) => selectedTypes.includes(type.type.name))
      )
    );
  }, [pokemons, selectedTypes]);

  useEffect(() => {
    getAllPokemons();
  }, []);

  const handleTypeSelection = (isChecked, selectedType) => {
    if (isChecked) {
      setSelectedTypes([...selectedTypes, selectedType]);
    } else {
      setSelectedTypes(selectedTypes.filter((type) => type !== selectedType));
    }
  };
  const handleFilterIconClick = () => {
    setShowFilterBar(!showFilterBar);
  };

  const handleDeleteIconClick = () => {
    setShowDeleteThisIcon(!showDeleteThisIcon);
  };

  const handleDeletePokemons = (newFilteredPokemons) => {
    setFilteredPokemons(newFilteredPokemons);
  };

  return (
    <>
      {loading ? null : filteredPokemons.length > 0 ? (
        <>
          <div className="flex justify-between">
            <div onClick={handleFilterIconClick}>
              <FilterIcon />
            </div>
            <div onClick={handleDeleteIconClick}>
              <DeleteIcon />
            </div>
          </div>

          <div className={`${!showFilterBar ? "hidden" : null}`}>
            <FilterBar
              onTypeSelection={handleTypeSelection}
              updateFilteredPokemons={handleDeletePokemons}
              pokemons={filteredPokemons}
            />
          </div>
        </>
      ) : null}

      <div
        className={`bg-white p-5 shadow mt-10 rounded-md flex flex-wrap justify-center`}
      >
        {loading ? (
          <img src="/loadingPokeball.gif" alt="" />
        ) : filteredPokemons.length > 0 ? (
          filteredPokemons.map((pokemon, index) => (
            <div
              key={pokemon.id + index}
              className="w-1/2  md:w-1/3 lg:w-1/4 xl:w-1/5 mb-4 px-2"
            >
              <PokemonCard
                key={pokemon.id}
                pokemon={pokemon}
                showDeleteIcon={showDeleteThisIcon}
                filteredPokemons={filteredPokemons}
                updateFilteredPokemons={handleDeletePokemons}
              />
            </div>
          ))
        ) : (
          <img src="/loadingPokeball.gif" alt="" />
        )}
      </div>
    </>
  );
};
