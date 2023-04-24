import React from "react";
import Navbar from "../components/Navbar";
import StoreProduct from "../components/StoreProduct";
import Review from "../components/Review";
import { Link } from "react-router-dom";
import { db } from "../firebase";
import { useLocation } from "react-router-dom";

const Store = () => {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex">
        <div className="sticky top-0 w-1/6">
          <Navbar />
        </div>
        <div className="w-1/2 p-8">
          <h1 className="text-4xl font-bold mb-4">{location.state.name}</h1>
          <input
            type="text"
            className="w-full mb-8 px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Search products..."
          />

          {/* Products grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Replace the following section with a loop to render multiple products */}
            <Link to="/addproduct" className="cursor-pointer">
              <div className="bg-white p-4 rounded-md shadow-md h-full flex flex-col justify-center items-center cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-10 h-10 text-gray-400 mb-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
                <span className="text-gray-500">Add new product</span>
              </div>
            </Link>

            <StoreProduct />
            <StoreProduct />
            <StoreProduct />
            <StoreProduct />
            <StoreProduct />
            <StoreProduct />
            <StoreProduct />
            <StoreProduct />
            <StoreProduct />
            <StoreProduct />
            <StoreProduct />
            <StoreProduct />
            {/* End of product card */}
          </div>
        </div>
        <div className="sticky top-0 h-screen w-1/3 p-8">
          <div className="flex flex-col h-full">
            <div className="bg-white p-4 rounded-md shadow-md mt-8 mb-8 flex-1max-h-20">
              <h2 className="text-2xl font-bold mb-4">
                Store <span className="text-indigo-700">Info</span>
              </h2>
              <p>Hours of operation: {location.state.hours}</p>
              <p>Location: {location.state.location}</p>
            </div>

            <div className="bg-white p-4 mb-8 rounded-md shadow-md mt-8 flex-1 overflow-y-auto max-h-80 scrollbar-thin scrollbar-thumb-indigo-600 scrollbar-track-transparent hover:scrollbar-thumb-indigo-400">
              <h2 className="text-2xl font-bold mb-4">
                Previous <span className="text-indigo-700">reviews</span>
              </h2>
              <Review />
              <Review />
              <Review />
              <Review />
              <Review />
              <Review />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Store;
