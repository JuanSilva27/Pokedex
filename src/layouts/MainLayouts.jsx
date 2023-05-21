import React from "react";
import { Header } from "../components/Header";
import { Outlet } from "react-router-dom";

export const MainLayouts = () => {
  return (
    <>
      <Header />
      <main className="flex flex-col p-10">
         <Outlet></Outlet>
      </main>
    </>
  );
};
