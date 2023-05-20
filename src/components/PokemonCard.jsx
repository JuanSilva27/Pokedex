import React, { useState } from "react";
import { Type } from "./Type";

const Card = ({ pokemon }) => {
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
      <div className="flex flex-col items-center justify-between px-4 py-2 bg-gray-100 cursor-pointer p-3">
        <img
          src={pokemon.sprites.other.home.front_default}
          alt="Card Image"
          className=" rounded-md h-44"
        />
        <h2 className="text-lg font-semibold uppercase mt-1">{pokemon.name}</h2>
      </div>
      {isHovered && (
        <div className="p-4 bg-white flex justify-evenly">
          {
            pokemon.types.map((type)=>(
                <Type key={type.type.name} {...type}/>
            ))
          }
        </div>
      )}
    </div>
  );
};

export default Card;