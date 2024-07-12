import React, { useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { FaShoppingCart } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { Navigate } from "react-router-dom";

const Courses = () => {
  const [isCartActive, setIsCartActive] = useState(true); // Default to hidden

  return (
    <>
      <div
        className={`fixed top-0 left-0 z-50 transition-all duration-700
             bg-white min-h-screen w-80 shadow-lg ${
               isCartActive ? "translate-x-0" : "-translate-x-full"
             }`}
      >
        <div className="flex justify-between items-center my-3 p-4">
          <span className="text-xl font-bold text-gray-800">MY Courses</span>

          <AiFillCloseCircle
            onClick={() => setIsCartActive(false)}
            className="border-red-500 border-2 
                         text-black text-2xl p-1 rounded-md cursor-pointer"
          />
        </div>

        <div>
          <h2 className=" text-black cursor-pointer p-2">1.Introduction </h2>
          <h2 className=" text-black cursor-pointer p-2">1.Introduction </h2>
          <h2 className=" text-black cursor-pointer p-2 ">1.Introduction </h2>
          <h2 className=" text-black cursor-pointer p-2">1.Introduction </h2>
          <h2 className=" text-black cursor-pointer p-2">1.Introduction </h2>
        </div>
      </div>
      <button
        onClick={() => setIsCartActive(!isCartActive)}
        className={`fixed bottom-4 left-8 text-5xl bg-white p-2 rounded-full
                   `}
      >
        <GiHamburgerMenu className="text-blue-500 text-xl" />
      </button>
    </>
  );
};

export default Courses;
