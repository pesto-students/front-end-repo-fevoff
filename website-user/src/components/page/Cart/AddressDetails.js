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
      <div className="container mx-auto my-5">
        <form className="lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16">
          <section aria-labelledby="cart-heading" className="rounded-l address-section border-black lg:col-span-8" >
            <div role="list" className="address-section">
              {Array.isArray(address.data) &&
                address.data.map((address) => (
                  <div key={address._id} className="grid grid-cols-5 our-address-listing">
                    <div className="col-span-1 flex items-center justify-center">
                      <input
                        type="radio"
                        name="address_id"
                        value={address._id}
                        checked={(address.defaultAddress == 1) ? "checked" : selectedAddressId.includes(address._id)}
                        onChange={() => handleCheckBoxChange(address._id)}
                        className="checkbox p-6 rounded-md"
                        id={`address_id${address._id}`}
                      />
                    </div>
                    <div className="col-span-3">
                      <p className="text-lg font-bold">
                        {address.name},  {address.contact}
                      </p>
                      <p className="text-lg font-bold">
                        {address.email}
                      </p>
                      <p className="text-sm">
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
            <Link to="/cart/payment"
              disabled={!selectedAddressId.length === 0}
              type="button"
              className="btn-payment" >
              Process To Payment
            </Link>
          </section>

          <section aria-labelledby="summary-heading" className="rounded-md cart-listing-border lg:col-span-4 lg:mt-0 lg:p-0">
            <h2 className="border-b px-4 py-3 text-2xl font-bold sm:p-4">
              Price Details
            </h2>

            <div className=" space-y-1 px-4 py-4">
              <div className="flex items-center justify-between">
                <dt className="text-lg font-semibold text-dark">Price:</dt>
                <dd className="text-sm font-bold text-gray-900">
                  ₹ {price}
                </dd>
              </div>
              <div className="flex items-center justify-between pt-4">
                <dt className="flex items-center text-lg font-semibold text-dark">
                  <span>Discount:</span>
                </dt>
                <dd className="text-sm font-bold text-green-700">
                  ₹ {discount}
                </dd>
              </div>
              <div className="flex items-center justify-between py-4">
                <dt className="flex text-lg font-semibold text-dark">
                  <span>Delivery Charges</span>
                </dt>
                <dd className="text-sm font-bold text-green-700">
                  Free
                </dd>
              </div>
              <div className="flex items-center justify-between border-y border-dashed py-4 ">
                <dt className="text-base font-bold text-gray-900">
                  Total Amount:
                </dt>
                <dd className="text-base font-bold text-gray-900">
                  ₹ {totalAmount}
                </dd>
              </div>
            </div>
            <div className="pt-2 pb-4 font-bold text-green-700 text-center">
              You will save ₹ {discount} on this order
            </div>
          </section>
        </form>
      </div>
    </>
  );
};

export default AddressDetails;
