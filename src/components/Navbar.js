// components/Navbar.js
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="sticky top-0 h-screen w-64 p-8 bg-white flex flex-col justify-between">
      <div>
        <h3 className="text-2xl font-bold mb-8">User Name</h3>
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
      <button className="bg-indigo-600 text-white px-4 py-2 rounded-md">
        Logout
      </button>
    </nav>
  );
};

export default Navbar;
