import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import PokemonContext from "../context/pokemonProvider";

export const Header = () => {
  return (
    <div className=" top-0 left-0 bg-white w-full shadow">
      <div className="container m-auto flex justify-between items-center text-gray-700">
        <a
          href="/"
        >
          <img src="pokedexLogo.png" alt="" className="w-1/4 sm:w-1/3" />
        </a>
      </div>
    </div>
  );
};
