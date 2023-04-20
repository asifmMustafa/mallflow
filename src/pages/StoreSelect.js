import React from "react";
import Navbar from "../components/Navbar";

const StoreSelect = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex">
        <div className="sticky top-0 w-1/6">
          <Navbar />
        </div>
        <div className="w-5/6 p-8">
          <h1 className="text-4xl font-bold mb-8">Stores</h1>
          <div className="flex flex-wrap">
            <div className="w-1/4 p-4">
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
                <span className="text-gray-500">Add new store</span>
              </div>
            </div>
            <div className="w-1/4 p-4">
              <div className="bg-white p-4 rounded-md shadow-md h-full">
                <h2 className="text-xl font-bold mb-2">Store 1</h2>
                <p className="text-gray-700 mb-4">Category...</p>
                <p className="text-gray-700 mb-4">Location...</p>
                <button className="bg-indigo-600 text-white px-4 py-2 rounded-md w-full">
                  Select store
                </button>
              </div>
            </div>
            <div className="w-1/4 p-4">
              <div className="bg-white p-4 rounded-md shadow-md h-full">
                <h2 className="text-xl font-bold mb-2">Store 2</h2>
                <p className="text-gray-700 mb-4">Category...</p>
                <p className="text-gray-700 mb-4">Location...</p>
                <button className="bg-indigo-600 text-white px-4 py-2 rounded-md w-full">
                  Select store
                </button>
              </div>
            </div>
            <div className="w-1/4 p-4">
              <div className="bg-white p-4 rounded-md shadow-md h-full">
                <h2 className="text-xl font-bold mb-2">Store 3</h2>
                <p className="text-gray-700 mb-4">Category...</p>
                <p className="text-gray-700 mb-4">Location...</p>
                <button className="bg-indigo-600 text-white px-4 py-2 rounded-md w-full">
                  Select store
                </button>
              </div>
            </div>
            {/* Add more existing stores here */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoreSelect;
