import React from "react";
import "./profile.css";
import UserImage from "./../../../asset/images/for-women.jpg"

const UpdateProfile = () => {
  return (
    <>
      <div className="mx-4">
        <form action="" method="POST">
          <div className="profile-heading">
            <h2 className="text-4xl italic">User Details</h2>
          </div>
          <div className="grid grid-cols-2 gap-x-8 gap-y-6 mt-5">
            <input className="h-12 w-full rounded-sm p-3 placeholder:text-black focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 input-box"
              type="text"
              placeholder="Enter Name"
              onChange={""}
            />
            <input className="h-12 w-full rounded-sm p-3 placeholder:text-black focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 input-box"
              type="text"
              placeholder="Date Of Birth"
              name="dda"
              // onChange={handleChange}
              // value={userData.dateOfBirth}
            />
            <input className="h-12 w-full rounded-sm p-3 placeholder:text-black focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 input-box"
              type="text"
              placeholder="Enter Your Contact"
              onChange={""}
            />
            <input className="h-12 w-full rounded-sm p-3 placeholder:text-black focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 input-box"
              type="text"
              placeholder="Enter Your Email"
              onChange={""}
            />
            <select className="h-12 w-full rounded-sm p-3 placeholder:text-black focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 input-box" name="gender">
              <option value={""} selected disabled> Select Gender</option>
              <option value={"Male"}>Male</option>
              <option value={"Female"}>Female</option>
              <option value={"Other"}>Other</option>
            </select>
            <input className="h-12 w-full rounded-sm p-3 placeholder:text-black focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 input-box"
              type="text"
              placeholder="Enter Alternate Number"
              onChange={""}
            />
            <input className="h-12 w-full rounded-sm p-3 placeholder:text-black focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 input-box"
              type="file"
              onChange={""}
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
