import React from "react";


import SideMenu from "./Dashboard/SideMenu";
import UpdateProfile from "./Dashboard/UpdateProfile";

const User = () => {
  return (
    <div className="bg-gradient-to-t from-yellow-100 via-pink-100 to-yellow-100 italic font-semibold">
    
      <h6 className="text-xs font-bold tracking-tight text-black sm:text-xl">
        Home > My Account
      </h6>
      <div className="flex">
        <SideMenu />
        <UpdateProfile />
      </div>
    </div>
  );
};

export default User;
