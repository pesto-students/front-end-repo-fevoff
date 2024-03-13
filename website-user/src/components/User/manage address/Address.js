import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { clearErrors, getUserAddress } from "../../../Action/userAction";
import { useAlert } from "react-alert";

const Address = () => {
  
  const dispatch = useDispatch();
  const alert = useAlert()

  const { loading, error, address } = useSelector(
    (state) => state.UserProfileData
  );
  

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    const storedUserId = localStorage.getItem("id");
    if (storedUserId) {
      dispatch(getUserAddress(storedUserId));
    }
  }, [dispatch, error, alert]);

  return (
    <div className="mx-auto max-w-7xl px-4 lg:px-8">
      <div className="mx-auto max-w-2xl py-8 lg:max-w-7xl">
        <h3 className="text-2xl font-bold underline mt-6">Manage Address</h3>
        <div className="mt-8 grid grid-cols-1 gap-y-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-8 xl:gap-x-10">
          {address.data && address.data.map((addressItem) => (
            <div
              key={addressItem._id}
              className="flex flex-col  rounded-lg overflow-hidden shadow-md"
            >
              <div className="p-6">
                <h3 className="text-sm font-semibold text-black">
                  Name: {addressItem.name}
                </h3>
                <p className="text-xs mt-2 text-gray-600">
                  Mobile Number: {addressItem.contact}
                </p>
                <p className="text-xs mt-1 text-gray-600">
                  Email ID: {addressItem.email}
                </p>
                <p className="text-xs mt-1 text-gray-600">
                  Address: {addressItem.houseNo} {addressItem.landmark} {addressItem.city} {addressItem.state} {addressItem.pincode}
                </p>
              </div>
              <div className="flex justify-between p-4 bg-gray-200">
                <Link to="/me/updateaddress"
                  type="button"
                  className="btn bg-transparent border-red-500 hover:bg-yellow-500"
                >
                  Edit
                </Link>
                <button
                  type="button"
                  className="btn ml-2 bg-transparent border-red-500 hover:bg-yellow-500"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-16 text-center ">
          <button
            type="button"
            className="btn w-full sm:w-1/2 md:w-1/3 lg:w-2/5 bg-transparent border-red-500 hover:bg-yellow-500"
          >
            Add New Address
          </button>
        </div>
      </div>
    </div>
  );
};

export default Address;
