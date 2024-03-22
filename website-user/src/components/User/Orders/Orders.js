import React, { useEffect, useState } from "react";

import { getOrderDetils } from "../../../Action/orderAction";
import { useDispatch, useSelector } from "react-redux";
import { useAlert } from "react-alert";
import {Link} from "react-router-dom"
import "./orders.css";

const Orders = () => {
  const dispatch = useDispatch();
  const alert = useAlert();
  const [userId, setUserId] = useState();
  // console.log(userId);
  const { error, loading, orderDetails } = useSelector(
    (state) => state.orderDetails
  );

  console.log(orderDetails);

  useEffect(() => {
    const storeUserID = localStorage.getItem("id");

    if (storeUserID) setUserId(storeUserID);

    dispatch(getOrderDetils(storeUserID));
  }, []);

  return (
    <>
      <div className="container mx-auto lg:px-0">
        <div className="mx-auto max-w-2xl lg:max-w-7xl">
          {orderDetails &&
            orderDetails.data &&
            orderDetails.data.map((order) => (
              <div key={order.orderId} className="lg:col-span-12 border p-2">
                <li className="flex py-6 sm:py-6 ml-3">
                  {order.items.map((item, index) => (
                    <React.Fragment key={index}>
                      <div className="flex-shrink-0 ">
                        <img
                          src={item.imageUrl}
                          alt={item.name}
                          className="sm:h-38 sm:w-38 h-24 w-24 rounded-md object-contain object-center"
                        />
                      </div>
                      <div className="ml-4 flex flex-1 flex-col justify-between sm:ml-6">
                        <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                          <div>
                            <div className="flex justify-between">
                              <h3 className="text-sm">
                                <a
                                  href={order.href}
                                  className="font-semibold text-black"
                                >
                                  {item.name}
                                </a>
                              </h3>
                            </div>
                            <div className="mt-1 flex flex-col text-sm">
                              <p className="border-l border-gray-200  text-sm text-gray-500">
                                Quantity: {item.quantity}
                              </p>
                            </div>
                            <div className="mt-1">
                              <p className="text-sm font-medium text-gray-900">
                                Price: {item.price}
                              </p>
                            </div>
                            <div className="mt-1">
                              <p className="text-sm font-medium text-gray-900">
                                SubTotal: {order.subTotal}
                              </p>
                            </div>
                            <div className="mt-1">
                              <p className="text-sm font-medium text-gray-900">
                                Order ID: {order.orderId}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="review-section">
                        <p>Arriving Tomorrow by 6 PM</p>
                        <p className="text-xs">
                          Your Item has been{" "}
                          <span className="text-green-600 font-bold text-xl mt-5">
                            {order.status}
                          </span>
                        </p>
                        <button type="button" className="web-btn-2">
                          Write Review
                        </button>
                        <Link to={`/me/orderdetails/${order.orderId}`} type="button" className="web-btn-2 mt-5 px-6 py-2">
                          Order Details
                        </Link>
                      </div>
                    </React.Fragment>
                  ))}
                </li>
              </div>
            ))}
        </div>
      </div>
    </>

    // <div className=" mx-auto lg:px-0 flex flex-row">
    //   <div className="flex flex-wrap px-25 justify-center">
    //     {orderDetails &&
    //       orderDetails.data &&
    //       orderDetails.data.map((order) => (
    //         <div key={order.orderId} className=" border p-2 mb-4">
    //           <div className="flex flex-row gap-4">
    //             {order.items.map((item, index) => (
    //               <React.Fragment key={index}>
    //                 <div className="card w-full shadow-xl flex flex-row ">
    //                   <figure className="w-24">
    //                     <img src={item.imageUrl} alt={item.name} />
    //                   </figure>
    //                   <div className="card-body">
    //                     <h2 className="text-xl">{item.name}</h2>
    //                     <p>{item.price}</p>
    //                     <div className="card-actions justify-end">
    //                       <button className="btn border border-red-600 bg-transparent ">Review Product</button>
    //                     </div>
    //                   </div>
    //                 </div>
    //               </React.Fragment>
    //             ))}
    //           </div>
    //         </div>
    //       ))}
    //   </div>
    // </div>
  );
};

export default Orders;
