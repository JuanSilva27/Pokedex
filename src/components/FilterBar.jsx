import React from "react";
import { arrayTypes } from "../helpers/arrayTypes";
import { primerLetraMayus } from "../helpers/primerLetraMayus";
export const FilterBar = ({ onTypeSelection }) => {
  const handleCheckBox = (e) => {
    onTypeSelection(e.target.checked, e.target.name);
  };

  return (
    <div className="container flex flex-col items-center">
      <div className="m-4">
        <form action="">
          <input type="text" placeholder="Ingrese un el Nombre o Habilidad" className="w-64 h-12 rounded-l-2xl border-none" />
          <button className="bg-blue-400 h-12 w-20 rounded-r-2xl" >Buscar</button>
        </form>
      </div>
      <span className="md:w-1/12 text-center font-bold text-xl">Tipos :</span>
      <div className="w-11/12 flex flex-wrap">
        {arrayTypes.map((type) => (
          <div key={type} className="w-1/3 md:w-1/5 flex justify-around mb-4 mt-2">
            <input
              type="checkbox"
              name={type}
              id={type}
              onChange={handleCheckBox}
              className="w-1/4"
            />
            <label htmlFor={type} className="w-3/4 first-letter: font-semibold text-xl text-">{primerLetraMayus(type)}</label>
          </div>
        ))}
      </div>
    </div>
  );
};
