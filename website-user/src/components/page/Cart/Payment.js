import React, { useEffect, useState } from "react";

import RazorpayLogo from "../../../asset/images/ROZARPAYLOGO.png";
import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import { getCartItems } from "../../../Action/cartAction";

const Payment = () => {
  const paymentOptions = [
    {
      id: 1,
      name: "Cash On Delivery",
    },
    {
      id: 1,
      name: "RazorPay",
      image: RazorpayLogo,
    },
  ];
  const dispatch = useDispatch();
  const alert = useAlert();
  const [userId, setUserId] = useState();

  const { cartItems, error } = useSelector((state) => state.cart);

  useEffect(() => {
    if (error) {
      alert.error(error);
      
    }
    // dispatch(updateCart(userId, productId, quantity))
    dispatch(getCartItems(userId));
    const storedUserId = localStorage.getItem("id");

    if (storedUserId) setUserId(storedUserId);
  }, [userId, dispatch, error, alert]);
  let totalPrice = 0;
  let totalDiscount = 0;
  if (cartItems && cartItems.items) {
    cartItems.items.forEach((product) => {
      totalPrice += product.productPrice;
      totalDiscount += product.productMrp - product.productPrice;
    });
  }
  const price = totalPrice + totalDiscount;
  const discount =  totalDiscount;
  const totalAmount = price - discount
  return (
    
    <div className="bg-gradient-to-t from-yellow-100 via-pink-100 to-yellow-100 italic font-semibold">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto py-8 lg:max-w-7xl">
        <h6 className="text-2xl font-bold tracking-tight text-black sm:text-2xl ">
          Home > Cart > Payment method
        </h6>
        <form className="mt-6 lg:grid lg:grid-cols-12 lg:gap-x-12 xl:gap-x-16 ">
          <section
            aria-labelledby="cart-heading"
            className="rounded-l border border-black lg:col-span-8 lg:pr-4 lg:h-48"
          >
            <ul role="list" className="divide-y divide-gray-200 ">
              {paymentOptions.map((paymentOption, idx) => (
                <li key={paymentOption.id} className="flex justify-between py-6 sm:py-6">
                  <div className="ml-4 flex flex-1 flex-col justify-between sm:ml-6">
                    <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                      <div>
                        <div className="flex ">
                          <input
                            type="checkbox"
                            defaultChecked
                            className="checkbox m-3 border-orange-600 checked:border-gray-800 [--chkbg:theme(colors.gray.600)] [--chkfg:orange]"
                          />
                          <h3 className="text-sm m-3 font-semibold text-black">
                            {paymentOption.name}
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </section>
          {/* Order summary */}
          <section
            aria-labelledby="summary-heading"
            className="mt-6 lg:mt-0 lg:col-span-4 lg:pl-4 border border-black"
          >
            <h2 className="border-b border-gray-200 px-4 py-3 text-lg font-medium text-gray-900 sm:p-4">
              Order Details
            </h2>
            <div className="px-4 py-4">
              <dl className="space-y-1">
                {/* ... (your order details code) ... */}
                <div className="flex items-center justify-between">
                      <dt className="text-sm text-gray-800">Price:</dt>
                      <dd className="text-sm font-medium text-gray-900">
                        ₹ {price}
                      </dd>
                    </div>
                    <div className="flex items-center justify-between pt-4">
                      <dt className="flex items-center text-sm text-gray-800">
                        <span>Discount:</span>
                      </dt>
                      <dd className="text-sm font-medium text-green-700">
                        - ₹ {discount}
                      </dd>
                    </div>
                    <div className="flex items-center justify-between py-4">
                      <dt className="flex text-sm text-gray-800">
                        <span>Delivery Charges</span>
                      </dt>
                      <dd className="text-sm font-medium text-green-700">
                        Free
                      </dd>
                    </div>
                    <div className="flex items-center justify-between border-y border-dashed py-4 ">
                      <dt className="text-base font-medium text-gray-900">
                        Total Amount:
                      </dt>
                      <dd className="text-base font-medium text-gray-900">
                        ₹ {totalAmount}
                      </dd>
                    </div>
                  </dl>
              
              <div className="px-2 pb-4 font-medium text-green-700">
                You will save ₹ {discount} on this order
              </div>
            </div>
          </section>
          <div className="flex flex-col  lg:flex-row items-center justify-center  lg:justify-between  lg:w-96">
            <button
              type="button"
              className="btn lg:w-full mt-2 mb-4 lg:mb-0 lg:mr-2 bg-transparent border-red-500 hover:bg-yellow-500"
            >
              Confirm Order
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
  );
};

export default Payment;
