// components/Navbar.js
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isCollapsed, setIsCollapsed] = useState(
    JSON.parse(localStorage.getItem("navbarCollapsed")) || false
  );

  useEffect(() => {
    localStorage.setItem("navbarCollapsed", JSON.stringify(isCollapsed));
  }, [isCollapsed]);

  const handleToggle = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <>
      {!isCollapsed && (
        <nav className="sticky top-0 h-screen w-64 p-8 bg-white flex flex-col justify-between">
          <div className="relative">
            <button
              onClick={handleToggle}
              className="absolute top-0 right-0 text-red-500 text-2xl p-2"
            >
              &times;
            </button>
            <h1 className="mt-2 mb-6 text-left text-2xl font-extrabold text-gray-900">
              Mall<span className="text-indigo-700">Flow</span>
            </h1>
            <Link
              to="/map"
              className="block mb-3 text-gray-700 hover:text-indigo-600 text-lg"
            >
              Back to map
            </Link>
            <hr className="border-gray-200 my-6" />
            <Link
              to="/profile"
              className="block mb-3 text-gray-700 hover:text-indigo-600 text-lg"
            >
              Profile
            </Link>
            <hr className="border-gray-200 my-6" />
            <Link
              to="/wishlist"
              className="block mb-3 text-gray-700 hover:text-indigo-600 text-lg"
            >
              Wishlist
            </Link>
            <hr className="border-gray-200 my-6" />
            <Link
              to="/cart"
              className="block mb-3 text-gray-700 hover:text-indigo-600 text-lg"
            >
              Cart
            </Link>
          </div>
          <button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-400">
            Logout
          </button>
        </nav>
      )}

      {isCollapsed && (
        <div className="sticky top-0 h-screen w-16 p-8 bg-white flex flex-col justify-start items-center">
          <button
            onClick={handleToggle}
            className="text-black text-2xl p-2"
          >
            &#9776;
          </button>
        </div>
      )}
    </>
  );
};

export default Navbar;
