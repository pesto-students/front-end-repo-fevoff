import React, { useEffect, useState } from "react";
import { Link,  useNavigate } from "react-router-dom";
import account from "../../../asset/images/account.png";
import order from "../../../asset/images/order-placed.png";
import logout from "../../../asset/images/logout.png";
import password from "../../../asset/images/password.png";
import address from "../../../asset/images/address.png";
import navbar from "../../../asset/images/Navbar.png";

// import { login } from "../../../Action/userAction";
import { useDispatch, useSelector } from "react-redux";
import { useAlert } from "react-alert";


const SideMenu = () => {
  const UserBar = [
    { name: "My Account", image: account, href: "/myaccount" },
    { name: "My Orders", image: order, href: "/me/orders" },
    { name: "Manage Address", image: address, href: "/me/manageaddress" },
    { name: "Change Password", image: password, href: "/me/changepassword" },
    { name: "Logout", image: logout, href: "/login" },
  ];
  const navigate = useNavigate();

  // const alert = useAlert();
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const [showSidebar, setShowSidebar] = useState(false);

  const {isAuthenticated } = useSelector(
    (state) => state.user
  );

  const toggleSidebar = () => {
    setShowSidebar((prev) => !prev);
  };

  useEffect(() => {
    if (isAuthenticated === false) {
      navigate("/login");
    }
    const storedName = localStorage.getItem("name")
    const storedEmail = localStorage.getItem("email")
    if(storedName) setName(storedName)
    if(storedEmail) setEmail(storedEmail)
    
  }, [isAuthenticated, navigate]);

  return (
    <>
      <div>
        <div className="min-h-screen flex flex-col w-96 border-2 border-gray-400 items-center h-5/6 m-16 hidden lg:flex">
          <div className="avatar">
            <div className="w-28 mt-10 rounded-full">
              <img
                src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                alt="userimage"
              />
            </div>
          </div>
          <div className="mt-5 font-semibold italic">
            
            <h3>Hellow, {name}</h3>
            <h3>Email ID: {email}</h3>
          </div>
          {UserBar.map((user) => (
            <Link
              to={user.href}
              className="flex flex-col text-xm space-y-6 m-2 bg-gray-300 h-12 w-80"
              key={user._id}
            >
              <div className="flex ml-20 py-2">
                <div>
                  <img src={user.image} className="w-8 mr-5" alt="" />{" "}
                </div>
                <div>{user.name}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Toggle button for smaller screens */}
      <div className="lg:hidden">
        <button
          onClick={toggleSidebar}
          className="p-2 rounded-md mb-2 w-10 m-2"
        >
          <img src={navbar} alt="" />
        </button>
      </div>

      {/* Sidebar overlay for smaller screens */}
      {showSidebar && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-75 flex items-center ">
          <div className=" p-4 rounded-md">
            <button onClick={toggleSidebar} className="text-xl font-bold">
              Close
            </button>
            {/* Your menu items for the sidebar */}
            {UserBar.map((user) => (
              <Link
                to={user.href}
                className="flex flex-col text-xm space-y-6 m-2 bg-gray-300 h-12 w-80"
                key={user.id}
              >
                <div className="flex ml-20 py-2">
                  <div>
                    <img src={user.image} className="w-8 mr-5" alt="" />{" "}
                  </div>
                  <div>{user.name}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default SideMenu;
