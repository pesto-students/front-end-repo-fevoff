import React, { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { CLEAR_ERRORS } from "../../../Constants/userConstants";
import { useAlert } from "react-alert";
import { login } from "../../../Action/userAction";
import "./login.css";

const Login = () => {
  const dispatch = useDispatch();
  const alert = useAlert();
  const location = useLocation();
  const navigate = useNavigate();

  const { error, loading, isAuthenticated } = useSelector(
    (state) => state.user
  );

  const [loginPassword, setLoginPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");

  const loginSubmit = (e) => {
    e.preventDefault();
    dispatch(login(loginEmail, loginPassword));
  };

  const redirect = location.search
    ? location.search.split("=")[1]
    : "/myaccount";

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(CLEAR_ERRORS);
    }
    if (isAuthenticated) {
      navigate(redirect);
    }
  }, [dispatch, navigate, isAuthenticated, error, alert, redirect]);

  return (
    <div className="container mx-auto">
      <div className="login-form-section">
        <div className="grid md:grid-cols-2 grid-cols-1">
          <div className="login-form-content p-2 md:p-l-4">
            <h1 className="form-heading">Login</h1>
            <p className="form-content hidden md:block">Get access to your Orders <br />Wish list and Recommendations</p>
            <p className="text-red-500">Do not have any account !<br></br><Link to="/register" className="register-link">Click to Create</Link> </p>
          </div>
          <div className="login-form p-2 md:p-r-4">
            <div className="md:mr-16 mx-2">
              <form method="POST" className="w-full" onSubmit={loginSubmit} >
                <div className="space-y-5">
                  <div className="mt-2">
                    <input className="h-12 w-full rounded-sm border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-black focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 input-box"
                      type="text"
                      placeholder="Enter Email or Mobile Number"
                      value={loginEmail}
                      onChange={(e) => setLoginEmail(e.target.value)}
                    ></input>
                  </div>
                  <div className="mt-2">
                    <input
                      className="h-12 w-full rounded-sm border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-black focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 input-box"
                      type="password"
                      placeholder="Enter Password"
                      value={loginPassword}
                      onChange={(e) => setLoginPassword(e.target.value)}
                    ></input>
                  </div>
                  <button type="submit" value="login" className="btn btn-outline rounded-sm  w-full hover:bg-slate-500 hover:text-white text-xs md:text-sm">
                    Login
                  </button>
                </div>
                <div className="grid grid-cols-2 w-full md:mt-6 mt-4">
                  <button type="button" className="btn btn-outline btn-login-with text-xs md:text-sm rounded-sm mr-3">
                    Login With Otp
                  </button>
                  <button type="button" className="btn btn-outline btn-login-with text-xs md:text-sm rounded-sm ml-3">
                    Login With Google
                  </button>
                </div>
              </form>
              <p className="md:mt-6 mt-5 italic md:text-lg text-md">By continuing, you agree to Fevoff's Terms of Use and Privacy Policy.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
