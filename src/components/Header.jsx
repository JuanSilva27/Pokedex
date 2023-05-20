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

        <div className="hidden md:flex items-center pr-10 text-base font-semibold cursor-pointer">
          <input
            type="text"
            placeholder="Buscar proyecto..."
            className="mt-3 mb-3 p-3 border rounded"
          />
          <button type="button" className="hover:bg-red-200 py-4 px-6 ">
            Buscar
          </button>
        </div>

        {/* <button className="block md:hidden py-3 px-4 mx-2 rounded focus:outline-none hover:bg-gray-200 group">
          <div className="w-5 h-1 bg-gray-600 mb-1"></div>
          <div className="w-5 h-1 bg-gray-600 mb-1"></div>
          <div className="w-5 h-1 bg-gray-600"></div>
          <div className="absolute top-0 -right-full h-screen w-8/12 bg-white border-opacity-0 group-focus:right-0 group-focus:opacity-100 transition-all duration-300">
            <div className="flex flex-col items-center w-full text-base cursor-pointer pt-10">
              <Link
                to="/projects"
                className="hover:bg-gray-200  py-4 px-6 w-full"
              >
                Proyectos
              </Link>
            </div>
          </div>
        </button> */}
      </div>
    </div>
  );
};