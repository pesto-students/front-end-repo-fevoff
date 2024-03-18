import React, { useEffect, useState } from "react";
import { Trash } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, getUserAddress } from "../../../Action/userAction";
import { useAlert } from "react-alert";
import { getCartItems } from "../../../Action/cartAction";
import { deleteAddress } from "../../../Action/userAction";
import { Link } from "react-router-dom";
import CommonBaner from "./../../CommonBanner/CommonBanner";
import Breadcrumbs from "./../../Breadcrumbs/Breadcrumbs";
import "./address-details.css";

const AddressDetails = () => {
  const dispatch = useDispatch();
  const [userId, setUserId] = useState();
  const alert = useAlert();
  const [selectedAddressId, setselectedAddressId] = useState([]);

  const { loading, error, address } = useSelector(
    (state) => state.UserProfileData
  );
  const { cartItems } = useSelector((state) => state.cart);
  console.log(address);
  const handleCheckBoxChange = (addressId) => {
    setselectedAddressId((prevSelectedAddressId) => {
      if (prevSelectedAddressId.includes(addressId)) {
        return prevSelectedAddressId.filter((id) => id !== addressId);
      } else {
        return [...prevSelectedAddressId, addressId];
      }
    });
  };

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    const storedUserId = localStorage.getItem("id");

    if (storedUserId) setUserId(storedUserId);
    dispatch(getUserAddress(storedUserId));
    if (storedUserId) {
      setUserId(storedUserId);
      dispatch(getUserAddress(storedUserId));

      if (selectedAddressId.length > 0) {
        const selectedAddress = address.data.filter((addr) =>
          selectedAddressId.includes(addr._id)
        );
        dispatch(getUserAddress(selectedAddress));
      } else {

        dispatch(getUserAddress(storedUserId));
      }
      dispatch(getCartItems(storedUserId));
    }
  }, [dispatch, error, alert, selectedAddressId]);

  const deleteAddressHandler = async (addressId) => {
    try {
      await dispatch(deleteAddress(addressId, userId));

      setselectedAddressId((prevSelectedAddressId) =>
        prevSelectedAddressId.filter((id) => id !== addressId)
      );
    } catch (error) {
      console.error("Error Deleting Address", error);
    }
  };

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
  const totalAmount = price - discount;

  return (
    <>
      <CommonBaner pageTitle={"Address Details"} />
      <Breadcrumbs breadcumr1="Cart" breadcumr1_link={"/cart"} breadcumr2={"Address Details"} />
      <div className="italic font-semibold">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto py-8 lg:max-w-7xl">
            <form className="mt-6 lg:grid lg:grid-cols-12 lg:gap-x-12 xl:gap-x-16">
              <section
                aria-labelledby="cart-heading"
                className="rounded-l address-section border-black lg:col-span-8"
              >
                <div role="list" className="address-section">
                  {Array.isArray(address.data) &&
                    address.data.map((address) => (
                      <div key={address._id} className="grid grid-cols-5 our-address-listing">
                        <div className="col-span-1 flex items-center justify-center">
                          <input
                            type="radio"
                            name="address_id"
                            value={address._id}
                            checked={selectedAddressId.includes(address._id)}
                            onChange={() => handleCheckBoxChange(address._id)}
                            className="checkbox p-6 rounded-md "
                          />
                        </div>
                        <div className="col-span-3">
                          <p className="text-lg font-bold">
                            {address.name},  {address.contact}
                          </p>
                          <p className="text-lg font-bold">
                            {address.email}
                          </p>
                          <p className="font-bold">
                            {address.houseNo} {address.streetArea}{" "}
                            {address.landmark} <br /> {address.city} {address.state}{" "}
                            {address.pincode}
                          </p>
                        </div>
                        <div className="col-span-1 flex items-center justify-center">
                          <button type="button" className="btn-delete"
                            onClick={() => deleteAddressHandler(address._id)}>
                            <Trash size={20} />
                          </button>
                        </div>
                      </div>
                    ))}
                </div>
              </section>
              <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between mt-6 ">
                <Link to="/cart/payment"
                  disabled={!selectedAddressId.length === 0}
                  type="button"
                  className={`btn  mb-4 lg:mb-0 lg:mr-2 bg-transparent border-red-500 ${selectedAddressId.length === 0 ? "opacity-50 cursor-not-allowed" : "hover:bg-yellow-500"
                    } lg:w-96`}
                >
                  {/* Order summary */}
                  <h2 className="border-b border-gray-200 px-4 py-3 text-lg font-medium text-gray-900 sm:p-4">
                    Order Details
                  </h2>
                  <div className="px-4 py-4">
                    <dl className=" space-y-1">
                      {/* ... (your order details code) ... */}
                      <div className="flex items-center justify-between">
                        <dt className="text-sm text-gray-800">Price: </dt>
                        <dd className="text-sm font-medium text-gray-900">
                          ₹ {price}
                        </dd>
                      </div>
                      <div className="flex items-center justify-between pt-4">
                        <dt className="flex items-center text-sm text-gray-800">
                          <span>Discount</span>
                        </dt>
                        <dd className="text-sm font-medium text-green-700">
                          - ₹ {discount}
                        </dd>
                      </div>
                      <div className="flex items-center justify-between py-4">
                        <dt className="flex text-sm text-gray-800">
                          <span>Delivery Charges</span>
                        </dt>
                        <dd className="text-sm font-medium text-green-700">Free</dd>
                      </div>
                      <div className="flex items-center justify-between border-y border-dashed py-4 ">
                        <dt className="text-base font-medium text-gray-900">
                          Total Amount
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
                  <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between mt-6 ">
                    <Link to="/cart/payment"
                      type="button"
                      className="btn  mb-4 lg:mb-0 lg:mr-2 bg-transparent border-red-500 hover:bg-yellow-500 lg:w-96"
                    >
                      Process To Checkout
                    </Link>
                    {/* <button
                type="button"
                className="btn  bg-transparent border-red-500 hover:bg-yellow-500 lg:w-96"
              >
                Process To Pay
              </button> */}
                  </div>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddressDetails;
