import React, { useEffect, useState } from "react";
import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import { getOneOrderDetil } from "../../../Action/orderAction";
import { useParams } from "react-router-dom";
import { getUserAddress } from "../../../Action/userAction";
import { ProgressTracker } from '@atlaskit/progress-tracker';
import "./orders.css";
import CommonBanner from "../../CommonBanner/CommonBanner";
import Breadcrumbs from "../../Breadcrumbs/Breadcrumbs";

const OrderDetails = () => {
  const dispatch = useDispatch();
  const alert = useAlert();
  const { orderId } = useParams();
  const [userId, setUserId] = useState();
  const { error, loading, oneOrderDetails } = useSelector(
    (state) => state.oneOrderDetails
  );

  const { address } = useSelector(
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

  const items = [
    {
      id: 'Pending Order',
      label: 'Pending Order',
      percentageComplete: 100,
    },
    {
      id: 'Order Shipped',
      label: 'Order Shipped',
      percentageComplete: 100,
      status: 'Order Shipped',
    },
    {
      id: 'On The Way',
      label: 'On The Way',
      percentageComplete: 50,
      status: 'On The Way',
    },
    {
      id: 'Arried Nearest Station',
      label: 'Arried Nearest Station',
      percentageComplete: 0,
      status: 'Arried Nearest Station',
    },
    {
      id: 'Out For Delivery',
      label: 'Out For Delivery',
      percentageComplete: 0,
      status: 'Out For Delivery',
    },
    {
      id: 'Delivered',
      label: 'Delivered',
      percentageComplete: 0,
      status: 'Delivered',
    },
  ];

  return (
    <>
      <CommonBanner pageTitle={"Order Details"} />
      <Breadcrumbs breadcumr1={"Manage Orders"} breadcumr1_link={"/me/orders"} breadcumr2={"Order Details"} />
      <div className="container mx-auto border-opacity-50 p-5 md:pb-20">
        <div className="grid card border border-black rounded-box">
          <div className="flex flex-wrap">
            {oneOrderDetails &&
              oneOrderDetails.data &&
              oneOrderDetails.data.data.map((order) => (
                <div key={order._id} className="grid md:grid-cols-4 grid-cols-1 p-2 mb-4">
                  <div className="col-span-3">
                    <div className="grid grid-cols-1 md:grid-cols-3">
                      <div className="col-span-1 flex justify-center items-center">
                        <figure className="w-48 rounded-md">
                          <img
                            src={order.product.productMainImage}
                            alt={order.product.name}
                          />
                        </figure>
                      </div>
                      <div className="col-span-2">
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
                            Seller: Fevoff Pvt. Ltd.
                          </h2>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-span-1 card-actions float-right flex justify-center items-center">
                    <button className="web-btn-2">
                      Invoice
                    </button>
                    <button className="web-btn-2">
                      Cancel Order
                    </button>
                    <button className="web-btn-2">
                      Review Product
                    </button>
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/* <div className="divider"></div> */}

        {/* <div className="grid h-56 card border border-black rounded-box place-items-center">
          {Array.isArray(address.data) &&
            address.data.map((address) => (
              <div key={address._id}>
                <div>
                  {address.city}
                </div>
              </div>
            ))}
        </div> */}

        {/* <div className="divider"></div> */}

        <div className="border border-gray-500 rounded-xl pt-8 mt-8 pb-6 hidden md:block">
          <h4 className="text-center pb-7 text-3xl italic font-bold">Shipping Status</h4>
          <ProgressTracker items={items} />;
        </div>
      </div>
    </>
  );
};

export default OrderDetails;
