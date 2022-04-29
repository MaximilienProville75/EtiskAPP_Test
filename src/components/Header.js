import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="bg-gray-800  w-full top-0 z-10 mb-5">
      <div className="flex flex-row p-5 justify-between sm:text-lg font-bold ">
        <div className=" flex justify-between w-3/12 sm:w-auto sm:gap-2">
          <p className="text-white font-extrabold">PROVILLE Maximilien</p>
        </div>
        <div className=" flex flex-row gap-10 sm:gap-1 \">
          <Link to="/" className="hover:text-blue-500 sm:text-white">
            EtiskAPP Test
          </Link>
        </div>
      </div>
    </header>
  );
};
