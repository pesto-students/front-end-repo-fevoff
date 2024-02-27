import React from "react";
import Banner from "../page/Home/Banner/Banner";

import SideMenu from "./Dashboard/SideMenu";
import UpdateProfile from "./Dashboard/UpdateProfile";

const User = () => {
  return (
    <div className="bg-gradient-to-t from-yellow-100 via-pink-100 to-yellow-100 italic font-semibold">
      <Banner />
      <h6 className="text-xs font-bold tracking-tight text-black sm:text-xs m-5">
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
