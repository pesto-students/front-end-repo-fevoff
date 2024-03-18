import React, { useEffect, useState } from "react";
import "./profile.css";
import UserImage from "./../../../asset/images/for-women.jpg";
import { updateUser } from "../../../Action/userAction";
import { useDispatch, useSelector } from "react-redux";
import { useAlert } from "react-alert";
import { CLEAR_ERRORS } from "../../../Constants/userConstants";

const UpdateProfile = () => {
  const dispatch = useDispatch();
  const alert = useAlert();
  const [userId, setUserId] = useState();
  const [userData, setUserData] = useState({
    name: "",
    dateOfBirth: "",
    contact: "",
    email: "",
    gender: "",
    alternateNumber: "",
    profileImage: null,
  });

  const { error, loading, isAuthenticated } = useSelector(
    (state) => state.user
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange =(e) =>{
    const file = e.target.file[0];
    setUserData((prevData)=>({
      ...prevData,
      profileImage: file,
    }))
  }

  const handleSubmit = (e) =>{
    e.preventDefault()
    dispatch(updateUser(userData))
  }

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(CLEAR_ERRORS);
    }
    const storedName = localStorage.getItem("id");

    if (storedName) setUserId(storedName);

    if (isAuthenticated) {
      dispatch(updateUser(userId));
    }
  }, [dispatch, isAuthenticated, error, alert, userId]);

  return (
    <>
      <div className="mx-4">
        <form action="" method="POST" onSubmit={handleSubmit}>
          <div className="profile-heading">
            <h2 className="text-4xl italic">User Details</h2>
          </div>
          <div className="grid grid-cols-2 gap-x-8 gap-y-6 mt-5">
            <input
              className="h-12 w-full rounded-sm p-3 placeholder:text-black focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 input-box"
              type="text"
              placeholder="Enter Name"
              name="name"
              onChange={handleChange}
              value={userData.name}
            />
            <input
              className="h-12 w-full rounded-sm p-3 placeholder:text-black focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 input-box"
              type="text"
              placeholder="Date Of Birth"
              onChange={handleChange}
              value={userData.dateOfBirth}
            />
            <input
              className="h-12 w-full rounded-sm p-3 placeholder:text-black focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 input-box"
              type="text"
              placeholder="Enter Your Contact"
              onChange={handleChange}
              value={userData.contact}
            />
            <input
              className="h-12 w-full rounded-sm p-3 placeholder:text-black focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 input-box"
              type="text"
              placeholder="Enter Your Email"
              onChange={handleChange}
              value={userData.email}
            />
            <select
              className="h-12 w-full rounded-sm p-3 placeholder:text-black focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 input-box"
              name="gender"
              onChange={handleChange}
              value={userData.gender}
            >
              <option value={""} selected disabled>
                {" "}
                Select Gender
              </option>
              <option value={"Male"}>Male</option>
              <option value={"Female"}>Female</option>
              <option value={"Other"}>Other</option>
            </select>
            <input
              className="h-12 w-full rounded-sm p-3 placeholder:text-black focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 input-box"
              type="text"
              placeholder="Enter Alternate Number"
              onChange={handleChange}
              value={userData.contact}
            />
            <input
              className="h-12 w-full rounded-sm p-3 placeholder:text-black focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 input-box"
              type="file"
              onChange={handleFileChange}
              value={userData.profileImage}
            />
            <div className="user-profile-img">
              <img src={UserImage} alt="Userimage" className="profile-image" />
            </div>
          </div>
          <div className="btn-section text-center mt-3">
            <button className="web-btn-2 px-12 py-3" type="submit">
              Update Profile
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default UpdateProfile;
