import React from "react";


import orderPlaced from "../../../asset/images/order-placed.png";
import { Link } from "react-router-dom";

const OrderConfiramation = () => {
  return (
    <div className="flex flex-col items-center py-10 bg-gradient-to-t from-yellow-100 via-pink-100 to-yellow-100 italic font-semibold">
      <div className="justify-center mb-4">
        <img src={orderPlaced} alt="" className="h-24" />
      </div>
      <div className="flex flex-col items-center py-5 text-center">
        <span className="text-2xl">Order placed successfully,</span>
        <span className="text-lg">Thank you!</span>
        <span className="text-sm">
          Dear user, your order is placed successfully.
        </span>
        <span className="text-sm">Your order ID is ......</span>
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-center mt-6">
        <Link to={"/products"}>
          <button
            type="button"
            href="/products"
            className="btn mb-4 lg:mb-0 lg:mr-2 w-full lg:w-64 bg-transparent border-red-500 hover:bg-yellow-500"
          >
            Back To Shopping
          </button>
        </Link>

        <Link to={"/me/orders"}>
          <button className="btn ml-0 lg:ml-5 w-full lg:w-64 bg-transparent border-red-500 hover:bg-yellow-500 ">
            Order Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default OrderConfiramation;
