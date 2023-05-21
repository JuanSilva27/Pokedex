import React from "react";
import { arrayTypes } from "../helpers/arrayTypes";
import { primerLetraMayus } from "../helpers/primerLetraMayus";
export const FilterBar = ({onTypeSelection}) => {
  
    const handleCheckBox = (e) =>{
        onTypeSelection(e.target.checked, e.target.name)
    }
  
    return (
    

    <div className="container">
      <div>
        <span>Tipo</span>
        {arrayTypes.map((type) => (
          <div key={type}>
            <input type="checkbox" name={type} id={type} onChange={handleCheckBox}  />
            <label htmlFor={type}>{primerLetraMayus(type)}</label>
          </div>
        ))}
      </div>
    </div>
  );
};
