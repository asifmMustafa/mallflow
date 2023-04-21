import React from "react";
import Navbar from "../components/Navbar";

const AddNewStore = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex">
        <div className="sticky top-0 w-1/6">
          <Navbar />
        </div>
        <div className="w-2/3 p-8">
          <div className="bg-white p-8 rounded-md shadow-md">
            <h1 className="text-4xl font-bold mb-8">Add new <span className="text-indigo-800">store</span></h1>
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  placeholder="Enter store name"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="category" className="block font-medium mb-2">
                  Category
                </label>
                <select
                  id="category"
                  name="category"
                  className="appearance-none rounded relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                >
                  <option value="">Select Category</option>
                  <option value="grocery">Grocery</option>
                  <option value="clothing">Clothing</option>
                  <option value="electronics">Electronics</option>
                </select>
              </div>
              <div className="mb-4">
                <label htmlFor="location" className="block font-medium mb-2">
                  Location
                </label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  placeholder="Enter store location"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="contact" className="block font-medium mb-2">
                  Contact Number
                </label>
                <input
                  type="text"
                  id="contact"
                  name="contact"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  placeholder="Enter store contact number"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="hours" className="block font-medium mb-2">
                  Hours of Operation
                </label>
                <input
                  type="text"
                  id="hours"
                  name="hours"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  placeholder="Enter store hours of operation"
                  required
                />
              </div>
              <button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-400">
                Add Store
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddNewStore;
