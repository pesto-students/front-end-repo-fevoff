import React, { useEffect, useState } from "react";
import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import { getOneOrderDetil } from "../../../Action/orderAction";
import { useParams } from "react-router-dom";
import { getUserAddress } from "../../../Action/userAction";

const OrderDetails = () => {
  const dispatch = useDispatch();
  const alert = useAlert();
  const { orderId } = useParams();
  const [userId, setUserId] = useState();
  const { error, loading, oneOrderDetails } = useSelector(
    (state) => state.oneOrderDetails
  );

  const {  address } = useSelector(
    (state) => state.UserProfileData
  );
  const [status, setStatus] = useState("confirmed"); // Initial status: confirmed

  // Function to update order status
  const updateStatus = (newStatus) => {
    setStatus(newStatus);
  };

  console.log(address);

  useEffect(() => {


    const storedUserId = localStorage.getItem("id");
    dispatch(getUserAddress(storedUserId));
    dispatch(getOneOrderDetil(orderId));
  }, []);
  return (
    <div>
      <h1 className="text-3xl flex justify-center mt-16">Order Details</h1>
      <div className="flex flex-col w-full border-opacity-50 px-20 p-20">
        <div className="grid h-76 w-11/12 card border border-black rounded-box lg:px-0 ">
          <div className="flex flex-wrap">
            {oneOrderDetails &&
              oneOrderDetails.data &&
              oneOrderDetails.data.data.map((order) => (
                <div key={order._id} className="border p-2 mb-4">
                  <div className="flex flex-row  gap-4">
                    <div className="card w-full  flex flex-row">
                      <figure className="w-48">
                        <img
                          src={order.product.productMainImage}
                          alt={order.product.name}
                        />
                      </figure>
                      <div className="card-body">
                        <h2 className="text-xl">Name: {order.product.name}</h2>
                        <h2 className="text-xl">
                          Quantity: {order.items.quantity}
                        </h2>
                        <h2 className="text-xl">Price: {order.items.price}</h2>
                        <h2 className="text-xl">
                          Total Price: {order.totalCost}
                        </h2>
                        <h2 className="text-xl">
                          Seller: Fevoof India Pvt. Ltd.
                        </h2>
                      </div>
                    </div>
                    <div className="card-actions lg:ml-96">
                      <button className="btn w-36 lg:border border-red-600 bg-transparent ">
                        Invoice
                      </button>
                      <button className="btn border w-36 border-red-600 bg-transparent">
                        Cancel Order
                      </button>{" "}
                      <button className="btn w-36 border border-red-600 bg-transparent">
                        Review Product
                      </button>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>

        <div className="divider"></div>

        <div className="grid h-56 card border border-black rounded-box place-items-center">
        {Array.isArray(address.data) &&
                      address.data.map((address) => (
                        <div key={address._id}>
                            <div>
                                {address.city}
                            </div>
                        </div>
                      ))}
        </div>

        <div className="divider"></div>

        <div className="grid h-56 card border border-black rounded-box place-items-center">
          <div className="flex justify-evenly items-center mt-4 space-x-4">
            <div
              className={`rounded-full h-6 w-6 flex items-center justify-center ${
                status === "confirmed" ? "bg-green-500" : "bg-gray-300"
              }`}
            >
              <p className="text-center mb-20 text-green-500 text-sm md:text-base lg:text-lg xl:text-xl">
                Order Confirmed
              </p>
              <span className="text-white">1</span>
            </div>
            <div
              className={`h-1 w-36 ${
                status === "confirmed" ? "bg-green-500" : "bg-gray-300"
              }`}
            ></div>
            <p className="text-center text-sm md:text-base ">Order Shiped</p>
            <div
              className={`rounded-full h-6 w-6 flex items-center justify-center ${
                status === "shipped" ? "bg-green-500" : "bg-gray-300"
              }`}
            >
              <span className="text-white">2</span>
            </div>
            <div
              className={`h-1 w-36 ${
                status === "shipped" ? "bg-green-500" : "bg-gray-300"
              }`}
            ></div>
            <p className="text-center text-sm md:text-base ">Out of delivery</p>
            <div
              className={`rounded-full h-6 w-6 flex items-center justify-center ${
                status === "delivered" ? "bg-green-500" : "bg-gray-300"
              }`}
            >
              <span className="text-white">3</span>
            </div>
            <p className="text-center text-sm md:text-base ">Delivered</p>
            <div
              className={`h-1 w-36 ${
                status === "deliverd" ? "bg-green-500" : "bg-gray-300"
              }`}
            ></div>
            <div
              className={`rounded-full h-6 w-6 flex items-center justify-center ${
                status === "delivered" ? "bg-green-500" : "bg-gray-300"
              }`}
            >
              <span className="text-white">4</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
