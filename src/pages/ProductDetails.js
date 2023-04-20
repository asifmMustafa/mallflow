import React from "react";
import Navbar from "../components/Navbar";
import Review from "../components/Review";

const ProductDetails = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex">
        <div className="sticky top-0 w-1/6">
          <Navbar />
        </div>
        <div className="w-1/2 p-8">
          <h1 className="text-4xl font-bold mb-8">Product Name</h1>
          <div className="flex overflow-x-scroll">
            {/* Replace the following section with a loop to render multiple images */}
            <img
              src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHw%3D&w=1000&q=80"
              alt="Product"
              className="w-100 h-100 object-cover rounded-md mr-8"
            />
            <img
              src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHw%3D&w=1000&q=80"
              alt="Product"
              className="w-100 h-100 object-cover rounded-md mr-8"
            />
            <img
              src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHw%3D&w=1000&q=80"
              alt="Product"
              className="w-100 h-100 object-cover rounded-md mr-8"
            />
            {/* End of image */}
          </div>
          <div className="my-8">
            <p className="text-gray-700 mb-4">Stock: 10</p>
            <p className="text-gray-700 mb-4">Price: 100</p>
            <p className="text-gray-700 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <button className="bg-indigo-600 text-white px-4 py-2 rounded-md">
              Add to cart
            </button>
          </div>
        </div>
        <div className="sticky top-0 h-screen w-1/3 p-8">
          <div className="flex flex-col h-full">
            {/* Review form */}
            <div>
              <h2 className="text-2xl font-bold mb-4">Write a review</h2>
              <form>
                <textarea
                  className="w-full h-32 mb-4 px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Write your review here..."
                ></textarea>
                <button className="bg-indigo-600 text-white px-4 py-2 rounded-md">
                  Submit
                </button>
              </form>
            </div>
            {/* Previous reviews */}
            <div className="bg-white p-4 rounded-md shadow-md mt-8 flex-1 overflow-y-auto max-h-100">
              <h2 className="text-2xl font-bold mb-4">Previous reviews</h2>
              {/* Replace the following section with a loop to render multiple reviews */}
              <Review />
              <Review />
              <Review />
              <Review />
              <Review />
              <Review />
              {/* End of review */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
