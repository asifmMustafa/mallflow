import React, { useState } from "react";
import Navbar from "../components/Navbar";

const AddProduct = () => {
  const [images, setImages] = useState([]);

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    const uploadedImages = files.map((file) => URL.createObjectURL(file));
    setImages((prevImages) => [...prevImages, ...uploadedImages]);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex">
        <div className="sticky top-0 w-1/6">
          <Navbar />
        </div>
        <div className="w-1/2 p-8">
          <div className="p-8 bg-white rounded-md shadow-md">
            <h1 className="text-4xl font-bold mb-8">Add Product</h1>
            <form>
              <div className="mb-6">
                <label
                  htmlFor="product-name"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Product Name
                </label>
                <input
                  type="text"
                  id="product-name"
                  name="product-name"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="product-price"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Price
                </label>
                <input
                  type="text"
                  id="product-price"
                  name="product-price"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="product-stock"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Stock
                </label>
                <input
                  type="text"
                  id="product-stock"
                  name="product-stock"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="product-description"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Description
                </label>
                <textarea
                  id="product-description"
                  name="product-description"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                ></textarea>
              </div>
              <div className="mb-6">
                <label
                  htmlFor="product-images"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Images
                </label>
                <div className="flex gap-4">
                  {images.map((image) => (
                    <img
                      key={image}
                      src={image}
                      alt="Product"
                      className="w-40 h-40 object-cover rounded-md"
                    />
                  ))}
                  <div className="flex flex-col items-center justify-center w-40 h-40 border-2 border-dashed rounded-md">
                    <label
                      htmlFor="product-image-upload"
                      className="text-gray-400"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="mx-auto h-8 w-8"
                        viewBox="0 0 20 20 20"
                        fill="currentColor"
                      ></svg>
                      Upload Images
                    </label>
                    <input
                      type="file"
                      id="product-image-upload"
                      name="product-image-upload"
                      className="hidden"
                      onChange={handleImageChange}
                      multiple
                    />
                  </div>
                </div>
              </div>
              <button
                type="submit"
                className="bg-indigo-600 text-white px-4 py-2 rounded-md"
              >
                Add Product
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
