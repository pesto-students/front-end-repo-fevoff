import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import navbar from "../../../asset/images/Navbar.png";
import { useDispatch, useSelector } from "react-redux";
import { useAlert } from "react-alert";
import UserImage from "./../../../asset/images/for-women.jpg"
import "./sidebar.css";
import { Blocks, Lock, LogOut, ShoppingBag, User } from "lucide-react";

import { loadUser } from "../../../Action/userAction";

const SideMenu = () => {

  const dispatch = useDispatch()


  const navigate = useNavigate();

  const alert = useAlert();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [userId, setUserId] = useState("");

  const [showSidebar, setShowSidebar] = useState(false);

  const { isAuthenticated } = useSelector((state) => state.user);

  const toggleSidebar = () => {
    setShowSidebar((prev) => !prev);
  };

  useEffect(() => {
    if (isAuthenticated === false) {
      navigate("/login");
    }
    const storedName = localStorage.getItem("name");
    const storedEmail = localStorage.getItem("email");
    const storedUserID = localStorage.getItem("id");
    if (storedName) setName(storedName);
    if (storedEmail) setEmail(storedEmail);
    if (storedUserID) setUserId(storedUserID);

    // dispatch(loadUser(userId))
  }, [isAuthenticated, navigate]);

  const handleLogout = async () => {
    localStorage.removeItem("name")
    localStorage.removeItem("email")
    localStorage.removeItem("contact")
    localStorage.removeItem("id")
    localStorage.removeItem("JWTToken")

    alert("Logout successful")
  };

  const UserBar = [
    { name: "My Account", image: <User />, href: "/myaccount" },
    { name: "My Orders", image: <ShoppingBag />, href: "/me/orders" },
    { name: "Manage Address", image: <Blocks />, href: "/me/manageaddress" },
    { name: "Change Password", image: <Lock />, href: "/me/changepassword" },
    { name: "Logout", image: <LogOut />, href: "/login", onClick: handleLogout },
  ];


  return (
    <>
      <div className="sidebar">
        <div className="image-section">
          <img src={UserImage} alt="Userimage" className="profile-image" />
        </div>
        <div className="font-semibold italic">
          <h3 className="font-bold text-2xl">Hello, {name}</h3>
          <h3>{email}</h3>
        </div>
        <div className="sidebar-menu">
          {
            UserBar.map((user) => (
              <div className="menu-btn" key={user._id}>
                <Link to={user.href} className="sidebar-btn-link" >
                  <div className="flex">
                    {user.image} <span className="ml-2">{user.name}</span>
                  </div>
                </Link>
              </div>
            ))
          }
        </div>
      </div>

      {/* Toggle button for smaller screens */}
      <div className="lg:hidden" >
        <button
          onClick={toggleSidebar}
          className="p-2 rounded-md mb-2 w-10 m-2"
        >
          <img src={navbar} alt="" />
        </button>
      </div>

      {/* Sidebar overlay for smaller screens */}
      {
        showSidebar && (
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
        )
      }
    </>
  );
};

export default SideMenu;
