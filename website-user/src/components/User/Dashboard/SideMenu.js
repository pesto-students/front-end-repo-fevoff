import React from "react";
import account from "../../../asset/images/account.png";
import order from "../../../asset/images/order-placed.png";
import logout from "../../../asset/images/logout.png";
import password from "../../../asset/images/password.png";
import address from "../../../asset/images/address.png";

const SideMenu = () => {
  const UserBar = [
    { name: "My Account", image: account, href: "/account" },
    { name: "My Orders", image: order, href: "/myorders" },
    { name: "Manage Address", image: address, href: "/manageaddress" },
    { name: "Change Password", image: password, href: "/changepassword" },
    { name: "Logout", image: logout, href: "/login" },

  ];
  return (
    <div>
      <div className="h-screen ">
        <div className="flex flex-col w-96 border-2 border-gray-400 items-center h-5/6 m-16 ">
          <div className="avatar">
            <div className="w-28 mt-10 rounded-full">
              <img
                src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                alt="userimage"
              />
            </div>
          </div>
          <div className="mt-5 font-semibold italic">
            <h3>Mahipal Singh</h3>
            <h3>123@gmail.com</h3>
          </div>
          {UserBar.map((user) => (
            <div
              className="flex flex-col text-xm space-y-6 m-2 bg-gray-300 h-12 w-80"
              key={user.id}
            >
              <div className="flex ml-20 py-2">
                <div>
                  <img src={user.image} className="w-8  mr-5" alt="" />{" "}
                </div>
                <a href={user.href}>{user.name}</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SideMenu;
