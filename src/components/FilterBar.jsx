import React, { useState } from "react";
import { arrayTypes } from "../helpers/arrayTypes";
import { primerLetraMayus } from "../helpers/primerLetraMayus";
export const FilterBar = ({
  onTypeSelection,
  updateFilteredPokemons,
  pokemons,
}) => {
  const [searchValue, setSearchValue] = useState("");
  const [pokemonResp, setPokemonResp] = useState(pokemons);

  const handleSearchInputChange = (e) => {
    const search = e.target.value;
    /* updateFilteredPokemons(
      pokemonResp.filter((pokemon) =>
        pokemon.name.includes(search.toLocaleLowerCase())
      )
    ); */
    console.log(pokemonResp);
    setSearchValue(search);
  };

  const handleCheckBox = (e) => {
    onTypeSelection(e.target.checked, e.target.name);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const pokemonFilteredsByName = pokemonResp.filter((pokemon) =>
      pokemon.name.includes(searchValue.toLocaleLowerCase())
    )
    const pokemonFilteredsByAbility = pokemonResp.filter((pokemon) =>
      pokemon.abilities.some((ability)=>ability.ability.name === searchValue.toLocaleLowerCase())
    )
    
    console.log(pokemonFilteredsByAbility)

    const pokemonFiltereds = pokemonFilteredsByName.concat(pokemonFilteredsByAbility)


    if(pokemonFiltereds.length>0){
      updateFilteredPokemons(pokemonFiltereds)
    } else {
      updateFilteredPokemons(pokemonResp)
    }

    setSearchValue("");
    console.log(pokemonFiltereds);
  };

  console.log(searchValue);
  return (
    <div className="container flex flex-col items-center">
      <form action="" onSubmit={handleSubmit}>
        <div className="m-4">
          <input
            type="text"
            placeholder="Ingrese un Nombre"
            className="w-64 h-12 rounded-l-2xl border-none font-semibold text-[16px]"
            onChange={handleSearchInputChange}
            value={searchValue}
          />
          <button className="bg-blue-400 h-12 w-20 rounded-r-2xl" type="submit">
            Buscar
          </button>
        </div>
      </form>
      <span className="md:w-1/12 text-center font-bold text-xl">Tipos :</span>
      <div className="w-11/12 flex flex-wrap">
        {arrayTypes.map((type) => (
          <div
            key={type}
            className="w-1/3 md:w-1/5 flex justify-around mb-4 mt-2"
          >
            <input
              type="checkbox"
              name={type}
              id={type}
              onChange={handleCheckBox}
              className="w-1/4"
            />
            <label
              htmlFor={type}
              className="w-3/4 first-letter: font-semibold text-xl text-"
            >
              {primerLetraMayus(type)}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};
