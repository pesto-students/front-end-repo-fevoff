/* eslint-disable jsx-a11y/no-redundant-roles */
import React, { useEffect, useState } from "react";
import { useCallback } from "react";
import useRazorpay from "react-razorpay";
import RazorpayLogo from "../../../asset/images/ROZARPAYLOGO.png";
import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import { getCartItems } from "../../../Action/cartAction";
import { getUserAddress } from "../../../Action/userAction";
import {
  orderCheckout,
  orderPaymentCallback,
} from "../../../Action/orderAction";
import logo from "../../../asset/images/logo.png";
import { useNavigate } from "react-router-dom";
import CommonBanner from "../../CommonBanner/CommonBanner";
import Breadcrumbs from "../../Breadcrumbs/Breadcrumbs";
import Loader from "../../Layout/Loader";

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
  const navigate = useNavigate();
  const [userId, setUserId] = useState();
  const [userName, setUserName] = useState();
  const [userEmail, setUserEmail] = useState();
  const [userContactNumber, setUserContactNumber] = useState();
  const [Razorpay, isLoaded] = useRazorpay();
  console.log(userId);
  const [selectedOption, setselectedOption] = useState(null);
  console.log(selectedOption);
  const { cartItems, error, loading } = useSelector((state) => state.cart);
  const { order: orderData } = useSelector((state) => state.order);
  const { address } = useSelector((state) => state.UserProfileData);

  console.log(cartItems, orderData, address);

  let totalPrice = 0;
  let totalDiscount = 0;
  if (cartItems && cartItems.data && cartItems.data.items) {
    cartItems.data.items.forEach((product) => {
      totalPrice += product.productPrice;
      totalDiscount += product.productMrp - product.productPrice;
    });
  }
  const price = totalPrice + totalDiscount;
  const discount = totalDiscount;
  const shippingCharges = Math.round((price / 100) * 5);
  const gst = 0;
  const totalAmount = price - discount + shippingCharges + gst;

  const handleRazorpayment = (paymentStatus, transactionTime) => {
    const options = {
      key: process.env.REACT_APP_RAZORPAY_KEY || "rzp_test_naqbPaCVZeqJjM",
      amount: totalAmount * 100,
      currency: "INR",
      name: "Fevoff India Pvt. Ltd.",
      description: cartItems.name,
      image: logo,
      // order_id: order_id,
      handler: (res) => {
        console.log(res);
        const transactionTime = new Date(res.created_at * 1000);
        const paymentStatus = res.status;
        alert.success("Payment Successful:" + res.razorpay_payment_id);
        dispatch(orderPaymentCallback(res, transactionTime, paymentStatus));
        navigate("/order/confiramation");
      },
      prefill: {
        name: userName,
        email: userEmail,
        contact: userContactNumber,
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#FFA500",
      },
    };
    const rzpay = new Razorpay(options);
    rzpay.open();
  };

  useEffect(() => {
    if (error) {
      alert.error(error);
    }

    console.log(selectedOption);
    const storedUserId = localStorage.getItem("id");
    const storedUserName = localStorage.getItem("name");
    const storedUserContactNumber = localStorage.getItem("contact");
    const storedUserContactEmail = localStorage.getItem("email");

    if (storedUserId) setUserId(storedUserId);
    if (storedUserName) setUserName(storedUserName);
    if (storedUserContactNumber) setUserContactNumber(storedUserContactNumber);
    if (storedUserContactEmail) setUserEmail(storedUserContactEmail);
    console.log(storedUserId);

    dispatch(getUserAddress(storedUserId));
    dispatch(getCartItems(storedUserId));

    // if (cartItems && cartItems.items) {
    //   // Prepare items for order
    //   const orderItems = cartItems.data.items.map((item) => ({
    //     productId: item.productId,
    //     quantity: item.quantity,
    //     price: item.productPrice,
    //   }));

    //   // dispatch(orderCheckout());
    //   dispatch(
    //     orderCheckout(
    //       storedUserId,
    //       [{ items: orderItems }],
    //       selectedOption,
    //       totalAmount,
    //       shippingCharges,
    //       address._id,
    //       gst,
    //       "pending"
    //     )
    //   );
    // }

    if (selectedOption === "Cash On Delivery") {
      checkoutOrderHandler();
    }
  }, [userId, dispatch, error, alert, selectedOption]);

  const handleOptionChange = (option) => {
    setselectedOption(option);
  };

  const status = "pemding";
  const checkoutOrderHandler = (
    paymentMethod,
    shippingCharges,
    gst,
    totalCost
  ) => {
    dispatch(
      orderCheckout(
        userId,
        cartItems &&
          cartItems.data.items.map((item) => ({
            productId: item.productId,
            quantity: item.quantity,
            price: item.productPrice,
          })),
        selectedOption,
        status,
        totalAmount,
        address._id,

        gst,
        shippingCharges,
        totalCost
      )
    );
    // console.log(userId);
  };

  const handleConfiramOrder = (storedUserId, orderId) => {
    if (!selectedOption) {
      alert.error("Please select a payment method");
      return;
      // checkoutOrderHandler(selectedOption);
    }

    if (selectedOption === "Cash On Delivery") {
      
      dispatch(
        orderPaymentCallback({
          orderId,
          transactionTime: new Date(),
          paymentStatus: "pending",
        })
      );
      navigate("/order/confiramation");
    }
  };

  const handlePayment = useCallback(() => {
    if (selectedOption === "RazorPay") {
      handleRazorpayment();
      checkoutOrderHandler(selectedOption);
    } else if (selectedOption === "Cash On Delivery") {
      handleConfiramOrder();
    }
  }, [selectedOption, handleRazorpayment, handleConfiramOrder]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <CommonBanner pageTitle={"Order Payment"} />
          <Breadcrumbs
            breadcumr1={"Cart"}
            breadcumr1_link={"/cart"}
            breadcumr2={"Order Payment"}
          />
          <div className="container mx-auto italic font-semibold">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="max-w-2xl mx-auto py-8 lg:max-w-7xl">
                <h6 className="text-2xl font-bold tracking-tight text-black sm:text-2xl ">
                  Payment method
                </h6>
                <form className="mt-6 lg:grid lg:grid-cols-12 lg:gap-x-12 xl:gap-x-16 ">
                  <section
                    aria-labelledby="cart-heading"
                    className="rounded-l border border-black lg:col-span-8 lg:pr-4 lg:h-48"
                  >
                    <ul role="list" className="divide-y divide-gray-200 ">
                      {paymentOptions.map((paymentOption, idx) => (
                        <li
                          key={paymentOption.id}
                          className="flex justify-between py-6 sm:py-6"
                        >
                          <div className="ml-4 flex flex-1 flex-col justify-between sm:ml-6">
                            <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                              <div>
                                <div className="flex ">
                                  <input
                                    type="checkbox"
                                    checked={
                                      selectedOption === paymentOption.name
                                    }
                                    onChange={() =>
                                      handleOptionChange(paymentOption.name)
                                    }
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
                            {shippingCharges}
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
                      onClick={handlePayment}
                      disabled={!selectedOption}
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
        </>
      )}
    </>
  );
};

export default Payment;
