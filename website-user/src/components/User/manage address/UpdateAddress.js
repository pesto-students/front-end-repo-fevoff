import React, { useEffect, useState } from "react";
import { editUserAddress, getUserAddress } from "../../../Action/userAction";
import { useDispatch, useSelector } from "react-redux";
import { useAlert } from "react-alert";
import { CLEAR_ERRORS } from "../../../Constants/userConstants";
import { useParams } from "react-router-dom";

const UpdateAddress = () => {
  const dispatch = useDispatch();
  const alert = useAlert();
  const { addressId } = useParams();
  const [userId, setUserId] = useState();
  const [selectedAddressId, setselectedAddressId] = useState([]);
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    contact: "",
    houseNo: "",
    streetArea: "",
    landmark: "",
    state: "",
    pincode: "",
    city: "",
  });

  const { error, loading, address } = useSelector(
    (state) => state.UserProfileData
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e, selectedAddress) => {
    e.preventDefault();
    
      dispatch(editUserAddress(addressId, userData, userId));
    
  };

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(CLEAR_ERRORS);
    }
    const storeUserID = localStorage.getItem("id");
    if (storeUserID) setUserId(storeUserID);
    
   

    if (selectedAddressId.length > 0) {
      const selectedAddress = address.data.filter((addr) =>
        selectedAddressId.includes(addr._id)
      );
      dispatch(editUserAddress(addressId, userData, userId));
      dispatch(getUserAddress(addressId))
    }
  }, []);
  return (
    <div>
      <div className="mx-auto  py-12 md:py-24 bg-gradient-to-t from-yellow-100 via-pink-100 to-yellow-100 italic font-semibold ">
        <div className="grid items-center justify-items-center gap-x-4 gap-y-10 lg:grid-cols-2">
          {/* contact from */}
          <div className="flex items-center justify-center">
            <div className="px-2 md:px-12 ">
              <p className="text-2xl font-bold text-gray-900 md:text-4xl">
                Hello There
              </p>
              <p className="mt-4 text-lg text-gray-600">
                Please update your address....
              </p>
              <form
                onSubmit={handleSubmit}
                method="POST"
                action=""
                className="mt-8 space-y-4 md-w-full flex flex-wrap"
              >
                <div className="grid w-full gap-y-4 md:gap-x-4 ">
                  <div className=" w-full  items-center gap-1.5 ">
                    <label
                      className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      htmlFor="first_name"
                    >
                      Name
                    </label>
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                      type="text"
                      id="name"
                      placeholder="Name"
                      name="name"
                      onChange={handleChange}
                      value={userData.name}
                    />
                  </div>
                  <div className="grid w-full  items-center gap-1.5">
                    <label
                      className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      htmlFor="last_name"
                    >
                      Email
                    </label>
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                      type="text"
                      id="email"
                      placeholder="email"
                      name="email"
                      onChange={handleChange}
                      value={userData.email}
                    />
                  </div>
                </div>
                <div className="grid w-full  items-center gap-1.5">
                  <label
                    className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    htmlFor="email"
                  >
                    Contact Number
                  </label>
                  <input
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                    type="text"
                    id="contact"
                    placeholder="Contact Number"
                    name="contact"
                    onChange={handleChange}
                    value={userData.contact}
                  />
                </div>
                <div></div>
                <div className="grid w-full  items-center gap-1.5">
                  <label
                    className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    htmlFor="message"
                  >
                    Pin Code
                  </label>
                  <input
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                    id="pincode"
                    placeholder="pincode"
                    name="pincode"
                    onChange={handleChange}
                    value={userData.pincode}
                  />
                </div>
                <div className="grid w-full  items-center gap-1.5">
                  <label
                    className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    htmlFor="message"
                  >
                    State
                  </label>
                  <input
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                    id="state"
                    placeholder="state"
                    name="state"
                    onChange={handleChange}
                    value={userData.state}
                  />
                </div>
                <div className="grid w-full  items-center gap-1.5">
                  <label
                    className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    htmlFor="message"
                  >
                    City
                  </label>
                  <input
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                    id="city"
                    placeholder="city"
                    name="city"
                    onChange={handleChange}
                    value={userData.city}
                  />
                </div>
                <div className="grid w-full  items-center gap-1.5">
                  <label
                    className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    htmlFor="message"
                  >
                    City
                  </label>
                  <input
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                    id="landmark"
                    placeholder="Landmark"
                    name="landmark"
                    onChange={handleChange}
                    value={userData.landmark}
                  />
                </div><div className="grid w-full  items-center gap-1.5">
                  <label
                    className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    htmlFor="message"
                  >
                    City
                  </label>
                  <input
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                    id="houseNo"
                    placeholder="House No."
                    name="houseNo"
                    onChange={handleChange}
                    value={userData.houseNo}
                  />
                </div><div className="grid w-full  items-center gap-1.5">
                  <label
                    className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    htmlFor="message"
                  >
                    City
                  </label>
                  <input
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                    id="streetArea"
                    placeholder="street Area"
                    name="streetArea"
                    onChange={handleChange}
                    value={userData.streetArea}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-md  px-3 py-2 text-sm font-semibold border border-red-500 text-green-500 shadow-sm hover:bg-yellow-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                  Update Address
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateAddress;
