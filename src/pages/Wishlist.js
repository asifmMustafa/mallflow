import React from "react";
import Navbar from "../components/Navbar";
import CartProduct from "../components/CartProduct";

const Wishlist = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex">
        <div className="sticky top-0 w-1/6">
          <Navbar />
        </div>
        <div className="w-5/6 p-8">
          <h1 className="text-4xl font-bold mb-8"><span className="text-indigo-800">Wishlist</span></h1>
          <div className="grid grid-cols-3 gap-4">
            {/* Replace the following section with a loop to render multiple products */}
            <CartProduct />
            <CartProduct />
            <CartProduct />
            <CartProduct />
            <CartProduct />
            <CartProduct />
            <CartProduct />
            <CartProduct />
            {/* End of product */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
