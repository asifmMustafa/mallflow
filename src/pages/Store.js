import React from "react";
import Navbar from "../components/Navbar";
import StoreProduct from "../components/StoreProduct";
import Review from "../components/Review";
import { FiSearch } from "react-icons/fi"; // Import search icon

const Store = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex">
        <div className="sticky top-0 w-1/6">
          <Navbar />
        </div>
        <div className="w-1/2 p-8">
          <h1 className="text-4xl font-bold mb-4">Store <span className="text-indigo-700">Name</span></h1>
          <div className="relative">
            <input
              type="text"
              className="w-full mb-8 px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm pr-8"
              placeholder="Search products..."
            />
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center -mt-8 px-2 text-indigo-700">
              <FiSearch />
            </div>
          </div>


          {/* Products grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Replace the following section with a loop to render multiple products */}
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
            {/* Store info */}
            <div className="bg-white p-4 rounded-md shadow-md mt-8 mb-8 flex-1">
              <h2 className="text-2xl font-bold mb-4">Store <span className="text-indigo-700">Info</span></h2>
              <p>Hours of operation....</p>
              <p>Location....</p>
            </div>
            {/* Previous reviews */}
            <div className="bg-white p-4 mb-8 rounded-md shadow-md mt-8 flex-1 overflow-y-auto max-h-80 scrollbar-thin scrollbar-thumb-indigo-600 scrollbar-track-transparent hover:scrollbar-thumb-indigo-400">
              <h2 className="text-2xl font-bold mb-4">Previous <span className="text-indigo-700">Reviews</span></h2>
              {/* Replace the following section with a loop to render multiple reviews */}
              <Review />
              <Review />
              <Review />
              <Review />
              <Review />
              <Review />
              {/* End of review */}
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Write a <span className="text-indigo-700">Review</span></h2>
              <form>
                <textarea
                  className="w-full h-32 mb-4 px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Write your review here..."
                ></textarea>
                <button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-400">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Store;