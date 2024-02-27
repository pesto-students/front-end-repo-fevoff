import React from "react";
import Banner from "../Home/Banner/Banner";

import orderPlaced from "../../../asset/images/order-placed.png";

const OrderConfiramation = () => {
  return (
    <div className="bg-gradient-to-t from-yellow-100 via-pink-100 to-yellow-100 italic font-semibold">
      <Banner />

      <div className="flex flex-col items-center py-10">
        <div className="justify-center">
          <img src={orderPlaced} alt="" className="h-24" />
        </div>
        <div className="flex flex-col items-center py-5">
          <span className="text-2xl">Order placed successfully,</span>
          <span className="text-lg">Thanku You</span>
          <span className="text-xs">
            Dear user your order is place successfully
          </span>
          <span className="text-xs">your order id is ......</span>
          <a href="/orderdetails" className="text-xs">
            <span className="underline text-cyan-500">click here</span> to check
            details
          </a>
        </div>
        <div className="flex">
          <button
            type="button"
            className=" btn w-64 bg-transparent border-red-500 hover:bg-yellow-500"
          >
            Back To Shopping
          </button>
          <button
            type="button"
            className="btn ml-5 w-64 bg-transparent border-red-500 hover:bg-yellow-500 "
          >
            Order Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderConfiramation;
