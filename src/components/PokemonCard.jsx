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
      className="border border-gray-300 rounded-lg shadow-lg"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="flex flex-col items-center justify-between px-4 py-2 bg-gray-100 cursor-pointer p-3">
        <img
          src={pokemon.sprites.other.home.front_default}
          alt="Card Image"
          className="mt-4 rounded-md h-44"
        />
        <h2 className="text-lg font-semibold uppercase">{pokemon.name}</h2>
        <svg
          className={`w-4 h-4 transform ${isHovered ? "" : "rotate-180"}`}
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path fillRule="evenodd" d="M10 14l6-6H4l6 6z" />
        </svg>
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
