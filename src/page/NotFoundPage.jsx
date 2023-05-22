import React from "react";
import { Link } from "react-router-dom";

export const NotFoundPage = () => {
  return (
    <div className="bg-white p-5 shadow  rounded-md flex flex-wrap justify-center`">
      <div className="flex flex-col items-center justify-center">
        <div className="flex w-[100%] justify-center ">
          <span className="w-1/3 flex items-center justify-center text-[156px] font-bold">
            4
          </span>
          <img className="w-1/4" src="/pokeball.png" alt="" />
          <span className="w-1/3 flex items-center justify-center text-[156px] font-bold">
            4
          </span>
        </div>
        <div className="mt-5 w-[100%] flex justify-center items-center flex-col">
          <span className=" text-4xl md:text-[26px] lg:text-[38px] font-bold uppercase">
            Pagina no encontrada
          </span>
          <Link to="/">
            <button className="bg-blue-600 m-5 p-5 rounded text-white font-semibold uppercase"> Volver a la pagina principal</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
