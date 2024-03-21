/* eslint-disable jsx-a11y/anchor-is-valid */
"use client";
import React, { useEffect, useState } from "react";
import {
  Home,
  Menu,
  ShoppingBagIcon,
  X,
  ListMinus,
  Search,
  SquareUser,
  ListCollapse,
  LogOut,
  Lock,
  List,
  User,
  Blocks,
  LogIn,
} from "lucide-react";
import { Link } from "react-router-dom";
import "./header.css";
import { useNavigate } from "react-router-dom";
import Logo from "./../../asset/images/logo.png";
import { useDispatch, useSelector } from "react-redux";
import { searchProductAction } from "../../Action/productAction";

// import { useDispatch } from 'react-redux';
// import { getProduct } from '../../Action/productAction';

const menuItems = [
  {
    name: "Home",
    icon: <Home />,
    href: "/",
  },
  {
    name: "Products",
    icon: <ListMinus />,
    href: "/products",
  },

  {
    name: "Search",
    icon: <Search />,
    href: "/search",
    // onClick: handleSearch,
  },
  {
    name: "Contact Us",
    icon: <SquareUser />,
    href: "/contact-us",
  },
  {
    name: "About Us",
    icon: <ListCollapse />,
    href: "/about-us",
  },
];

const myAccountMenu = [
  {
    name: "My Account",
    icon: <User />,
    href: "/myaccount",
  },
  {
    name: "Manage Orders",
    icon: <List />,
    href: "/me/orders",
  },

  {
    name: "Manage Address",
    icon: <Blocks />,
    href: "/me/manageaddress",
  },
  {
    name: "Manage Password",
    icon: <Lock />,
    href: "/me/changepassword",
  },
  {
    name: "Logout",
    icon: <LogOut />,
    href: "/logout",
  },
];

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [userName, setUserName] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  // const dispatch = useDispatch();
  // const [keyword, setKeyword] = useState('');

  const { searchProduct } = useSelector((state) => state.searchProduct);

  const debounce = (func, delay) => {
    let timeoutId;
    return function (...arag) {
      if (timeoutId) clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        func.apply(this, arag);
      }, delay);
    };
  };

  const fetchSearchResult = async (query) => {
    try {
      const response = await dispatch(searchProductAction());
      if (response && response.data) {
        setSearchResults(response.data);
      } else {
        console.error("Invalid response received from API");
      }
    } catch (error) {
      console.error("Error fetching search result:", error);
    }
  };

  const debouncedFetchedSearchResult = debounce(fetchSearchResult, 300);

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    debouncedFetchedSearchResult(query);
  };

  useEffect(() => {
    checkUser();
    // setUserName(userName);
  }, []);

  const checkUser = () => {
    const storedName = localStorage.getItem("name");
    const storedEmail = localStorage.getItem("email");
    const storedUserID = localStorage.getItem("id");

    if (
      storedName !== "" &&
      storedName != null &&
      storedEmail !== "" &&
      storedEmail != null &&
      storedUserID !== "" &&
      storedUserID != null
    ) {
      setUserName(storedName);
      setShowMenu(true);
    } else {
      setUserName(null);
      setShowMenu(false);
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const btnClick = async (pageName) => {
    if (pageName == "/logout") {
      userLogout();
    } else {
      navigate(pageName);
      setIsMenuOpen(false);
    }
  };

  const userLogout = async () => {
    localStorage.removeItem("id");
    localStorage.removeItem("email");
    localStorage.removeItem("contact");
    localStorage.removeItem("name");
    localStorage.removeItem("JWTToken");
    // setUserName((e) => null);
    // setShowMenu((e) => false);
    setUserName(null);
    setShowMenu(false);
    setIsMenuOpen(false);
    navigate("/");
  };

  return (
    <div className="relative w-full header py-4">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 sm:px-6 lg:px-12">
        <div className="inline-flex items-center space-x-2">
          <Link to={"/"}>
            {/* <span className="font-semibold text-3xl italic">Fevoff</span> */}
            <img src={Logo} alt="Logo" width={"100px"} />
          </Link>
        </div>
        <div className="hidden lg:block">
          {isMenuOpen ? (
            <X onClick={toggleMenu} className="h-6 w-6 cursor-pointer" />
          ) : (
            <ul className="inline-flex space-x-8">
              {menuItems.map((item, index) => (
                <li key={index}>
                  <label
                    onClick={(e) => {
                      item.href == "/search"
                        ? document.getElementById("search-bar").showModal()
                        : btnClick(item.href);
                    }}
                    className="text-lg italic font-bold text-gray-800 hover:text-gray-900 cursor-pointer"
                  >
                    {item.name}
                  </label>
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="hidden lg:block">
          <Link to={"/cart"}>
            <ShoppingBagIcon />
          </Link>
        </div>
        <div className="hidden lg:block">
          {showMenu && showMenu == true ? (
            <>
              <Link to={"/myaccount"} className="btn web-btn-2">
                Hi, {userName}
              </Link>
            </>
          ) : (
            <>
              <Link to={"/login"} className="btn web-btn-2">
                Login
              </Link>
            </>
          )}
        </div>
        <div className="lg:hidden">
          <div className="drawer-content">
            {isMenuOpen ? (
              <X
                onClick={toggleMenu}
                htmlFor="my-drawer"
                className="h-6 w-6 cursor-pointer  drawer-button"
              />
            ) : (
              <Menu
                onClick={toggleMenu}
                htmlFor="my-drawer"
                className="h-6 w-6 cursor-pointer  drawer-button"
              />
            )}
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <>
          <div className="our-drawer">
            <aside class="flex h-screen w-72 flex-col overflow-y-auto border-r bg-white py-8">
              <h2 className="text-3xl italic border-b border-gray-500 px-5">
                Fevoff
              </h2>
              <div class="flex flex-1 flex-col justify-between">
                <nav class="mt-2">
                  {menuItems.map((data, index) => {
                    return (
                      <label
                        key={index}
                        class="flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700 menu-btn-link"
                        onClick={(e) => {
                          data.href == "/search"
                            ? document.getElementById("search-bar").showModal()
                            : btnClick(data.href);
                        }}
                      >
                        {data.icon}
                        <span class="mx-2 text-sm font-medium">
                          {data.name}
                        </span>
                      </label>
                    );
                  })}
                  {showMenu && showMenu == true ? (
                    myAccountMenu.map((data, index) => {
                      return (
                        <label
                          key={index}
                          class="flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700 menu-btn-link"
                          onClick={(e) => {
                            data.href == "/search"
                              ? document
                                .getElementById("search-bar")
                                .showModal()
                              : btnClick(data.href);
                          }}
                        >
                          {data.icon}
                          <span class="mx-2 text-sm font-medium">
                            {data.name}
                          </span>
                        </label>
                      );
                    })
                  ) : (
                    <label
                      class="flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700 menu-btn-link"
                      onClick={(e) => btnClick("/login")}
                    >
                      <LogIn />
                      <span class="mx-2 text-sm font-medium">
                        Manage Account
                      </span>
                    </label>
                  )}
                </nav>
              </div>
            </aside>
          </div>
        </>
      )}

      <dialog id="search-bar" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-xl italic mb-3">Search Here!</h3>
          <input
            type="text"
            className="form-control input-tag border w-full h-14 bg-gray-200 px-3"
            name="search"
            autoComplete="off"
            placeholder="Enter Product Name For Search"
            value={searchQuery}
            onChange={handleSearchChange}
          />
          <ul>
            {searchResults.length > 0 ? (
              searchResults.map((product) => (
                <div key={product._id} className="product">
                  <h3>{product.name}</h3>
                  <p>{product.productDescription}</p>
                  {/* Add more product details here as needed */}
                </div>
              ))
            ) : (
              <p>No products found</p>
            )}
          </ul>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Header;
