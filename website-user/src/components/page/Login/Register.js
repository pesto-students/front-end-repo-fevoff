import React, { useState, useEffect } from "react";
// import { Link, redirect } from "react-router-dom";
import { clearErrors, register } from "../../../Action/userAction";
import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Register = ({ location, history }) => {
  const dispatch = useDispatch();
  const alert = useAlert();
  

  const { error, loading, isAuthenticated } = useSelector(
    (state) => state.user
  );

  const [user, setUser] = useState({
    name: "",
    email: "",
    contact: "",
    password: "",
    confiramPassword: "",
  });

  const { name, email, contact, password, confiramPassword } = user;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const registerSubmit = (e) => {
    e.preventDefault();

    const userData = {
      name,
      email,
      contact,
      password,
    };

    dispatch(register(userData));
  };



  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    if (isAuthenticated) {
      history.push("/account");
    }
  }, [dispatch, isAuthenticated, alert, error, history]);
  return (
    <div className="bg-gradient-to-t from-yellow-100 via-pink-100 to-yellow-150 italic">
      <section className="rounded-md  p-2">
        <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8">
          <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
            <h2 className="text-2xl font-bold leading-tight text-black">
              Sign Up your self
            </h2>
            <p className="mt-2text-sm text-blue-600 font-bold">
              You are new here, don't worry{" "}
              <p className="font-semibold text-black transition-all duration-200 underline">
                just create an account with below details
              </p>
            </p>
            <form
              action="#"
              method="POST"
              className="mt-8"
              onSubmit={registerSubmit}
            >
              <div className="">
                <div>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="name"
                      placeholder="Enter Name"
                      value={name}
                      name="name"
                      onChange={handleInputChange}
                    ></input>
                  </div>
                </div>
                <div>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="email"
                      placeholder="Enter Email"
                      value={email}
                      name="email"
                      onChange={handleInputChange}
                    ></input>
                  </div>{" "}
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="mobileNumber"
                      placeholder="Enter Mobile Number"
                      value={contact}
                      name="contact"
                      onChange={handleInputChange}
                    ></input>
                  </div>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="password"
                      placeholder="Enter Password"
                      value={password}
                      name="password"
                      onChange={handleInputChange}
                    ></input>
                  </div>
                  {/* <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="confiramPassword"
                      placeholder="Confiram Password"
                      value={confiramPassword}
                      name="confiramPassword"
                      onChange={handleInputChange}
                    ></input>
                  </div> */}
                </div>
              </div>
              <div className="mt-3 space-y-3">
                <button
                  type="submit"
                  value="Register"
                  className="relative inline-flex w-full items-center justify-center rounded-md border border-gray-400  px-3.5 py-2.5 font-semibold text-blue-700 transition-all duration-200 hover:bg-yellow-500 hover:text-black focus:bg-gray-100 focus:text-black focus:outline-none"
                >
                  Create Account
                </button>
                <Link to="/verifyotp"
                type="button"
                className="relative inline-flex w-full items-center justify-center rounded-md border border-gray-400  px-3.5 py-2.5 font-semibold text-blue-700 transition-all duration-200 hover:bg-yellow-500 hover:text-black focus:bg-gray-100 focus:text-black focus:outline-none"
              >
                Sign in with OTP
              </Link>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Register;
