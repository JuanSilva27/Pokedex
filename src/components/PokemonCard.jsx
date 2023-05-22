import React, { useState } from "react";
import { Type } from "./Type";
import { Link } from "react-router-dom";
import { DeleteThisIcon } from "./DeleteThisIcon";

const Card = ({ pokemon, showDeleteIcon, filteredPokemons, updateFilteredPokemons }) => {
  
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className={`border border-gray-300 rounded-lg shadow-lg transition-all duration-300 ease-in-out ${
        isHovered ? "transform scale-105" : ""
      }`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <DeleteThisIcon showDeleteIcon={showDeleteIcon} pokemonId={pokemon.id} pokemons={filteredPokemons} updateFilteredPokemons={updateFilteredPokemons}/>
      <div className="flex flex-col items-center justify-between px-4 py-2 bg-gray-100 cursor-pointer p-3">
        <Link to={`/${pokemon.id}`}>
          
          <img
            src={pokemon.sprites.other.home.front_default}
            alt="Card Image"
            className=" rounded-md h-44"
          />
          <h2 className="text-lg font-semibold uppercase mt-1 text-center">
            {pokemon.name}
          </h2>
        </Link>
      </div>
      {isHovered && (
        <div className="p-4 bg-white flex justify-evenly">
          {pokemon.types.map((type) => (
            <Type key={type.type.name} {...type} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Card;
