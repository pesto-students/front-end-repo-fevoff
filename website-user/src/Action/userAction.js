import { CLEAR_ERRORS } from "../Constants/productConstant";
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAIL,
  LOAD_USER_REQUEST,
  LOAD_USER_SUCCESS,
  LOAD_USER_FAIL,
  USER_DETAILS_REQUEST,
  USER_DETAILS_SUCCESS,
  USER_DETAILS_FAIL,
  LOAD_USER_ADDRESS_REQUEST,
  LOAD_USER_ADDRESS_SUCCESS,
  LOAD_USER_ADDRESS_FAIL,
} from "../Constants/userConstants";

import axios from "axios";

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: LOGIN_REQUEST });
    const config = { headers: { "Content-Type": "application/json" } };
    const { data } = await axios.post(
      "http://localhost:3001/api/login",
      { email, password },
      config
    );

    dispatch({ type: LOGIN_SUCCESS, payload: data.user });
    if (data.status === true) {
      console.log(data);
      localStorage.setItem("JWTToken", data.jwtToken);
      localStorage.setItem("id", data.data._id);
      localStorage.setItem("name", data.data.name);
      localStorage.setItem("email", data.data.email);
      localStorage.setItem("contact", data.data.contact);
    }
  } catch (error) {
    dispatch({ type: LOGIN_FAIL, payload: error.response.data.message });
  }
};

export const register = (userData) => async (dispatch) => {
  try {
    dispatch({ type: REGISTER_USER_REQUEST });
    const config = { headers: { "Content-type": "application/json" } };
    const { data } = await axios.post(
      "http://localhost:3001/api/users",
      userData,
      config
    );
    dispatch({ type: REGISTER_USER_SUCCESS, payload: data.user });
  } catch (error) {
    dispatch({
      type: REGISTER_USER_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const loadUser = (userId) => async (dispatch) => {
  try {
    dispatch({ type: LOAD_USER_REQUEST });
    const config = { headers: { "Content-type": "application/json" } };
    const { data } = await axios.get(
      `http://localhost:3001/api/users/${userId}`,
      config
    );
    dispatch({ type: LOAD_USER_SUCCESS, payload: data.user });
    console.log(data);
  } catch (error) {
    dispatch({
      type: LOAD_USER_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const getUserDetails = (userId) => async (dispatch) => {
  try {
    dispatch({ type: USER_DETAILS_REQUEST });
    const { data } = await axios.get(
      `http://localhost:3001/api/user/${userId}`
    );
    dispatch({ type: USER_DETAILS_SUCCESS, payload: data.user });
  } catch (error) {
    dispatch({ type: USER_DETAILS_FAIL, payload: error.response.data.message });
  }
};

export const getUserAddress = (userId) => async (dispatch) => {
  try {
    dispatch({ type: LOAD_USER_ADDRESS_REQUEST });
    // const config = { headers: { "Content-type": "application/json" } };
    const { data } = await axios.get(
      `http://localhost:3001/api/users-address/${userId}`
    );
    dispatch({ type: LOAD_USER_ADDRESS_SUCCESS, payload: data });
    
  } catch (error) {
    dispatch({
      type: LOAD_USER_ADDRESS_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};
