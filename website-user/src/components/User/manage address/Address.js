import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { clearErrors, getUserAddress } from "../../../Action/userAction";
import { useAlert } from "react-alert";
import "./address.css";

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
    <>
      <div className="mx-4">
        <div className="profile-heading">
          <h2 className="text-4xl italic">Manage Address</h2>
        </div>
        <div className="grid grid-cols-1 mt-4">
          {
            address.data && address.data.map((addressItem) => (
              <div key={addressItem._id} className="address-box border border-gray-300">
                <div className="p-6">
                  <h3 className="italic">
                    {addressItem.name}, {addressItem.contact}
                  </h3>
                  <p className="mt-2">{addressItem.email} </p>
                  <p className="mt-2"> Address: {addressItem.houseNo} {addressItem.landmark} {addressItem.city} {addressItem.state} {addressItem.pincode} </p>
                  <div className="box-footer mt-3 gap-4">
                    <button type="button" className="btn-edit">
                      Edit
                    </button>
                    <button type="button" className="btn-delete">
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </>
  );
};

export default Address;
