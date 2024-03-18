import axios from "axios";

import {
  ALL_PRODUCT_REQUEST,
  ALL_PRODUCT_SUCCESS,
  ALL_PRODUCT_FAIL,
  CLEAR_ERRORS,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_FAIL,
  NEW_REVIEW_REQUEST,
  NEW_REVIEW_SUCCESS,
  NEW_REVIEW_FAIL,
  GET_CATEGORY_REQUEST,
  GET_CATEGORY_SUCCESS,
  GET_CATEGORY_FAIL,
  GET_BRAND_REQUEST,
  GET_BRAND_SUCCESS,
  GET_BRAND_FAIL,
  GET_CATEGORY_DETAILS_REQUEST,
  GET_CATEGORY_DETAILS_SUCCESS,
  GET_CATEGORY_DETAILS_FAIL,
  GET_BRAND_DETAILS_REQUEST,
  GET_BRAND_DETAILS_SUCCESS,
  GET_BRAND_DETAILS_FAIL,
} from "../Constants/productConstant";

export const getProduct = () => async (dispatch) => {
  try {
    dispatch({ type: ALL_PRODUCT_REQUEST });
    const config = { headers: { "Content-type": "application/json" } };

    const responce = await axios.get(
      `http://localhost:3001/api/products`,
      config
    );

    dispatch({
      type: ALL_PRODUCT_SUCCESS,
      payload: responce.data,
    });
  } catch (error) {
    dispatch({
      type: ALL_PRODUCT_FAIL,
      payload: error.message,
    });
  }
};

export const getProductDetils = (productId) => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_DETAILS_REQUEST });
    // const config = { headers: { "Content-type": "application/json" } };
    const { data } = await axios.get(
      `http://localhost:3001/api/products/${productId}`
    );
    dispatch({
      type: PRODUCT_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PRODUCT_DETAILS_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const newReview = (reviewData) => async (dispatch) => {
  try {
    dispatch({ type: NEW_REVIEW_REQUEST });
    const config = { headers: { "Content-Type": "application/json" } };

    const { data } = await axios.put();

    dispatch({
      type: NEW_REVIEW_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: NEW_REVIEW_FAIL,
      payload: error.message,
    });
  }
};

export const getCategory = () => async (dispatch) => {
  try {
    dispatch({ type: GET_CATEGORY_REQUEST });
    // const config = { headers: { "Content-Type": "application/json" } };
    const data = await axios.get(
      "http://localhost:3001/api/categorys",

      // config
    );

    dispatch({
      type: GET_CATEGORY_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({ type: GET_CATEGORY_FAIL, payload: error.message });
  }
};

export const getCategoryDetails = (categoryId) => async (dispatch) => {
  try {
    dispatch({ type: GET_CATEGORY_DETAILS_REQUEST });
    const config = { headers: { "Content-Type": "application/json" } };
    const {data} = await axios.get(
      `http://localhost:3001/api/categorys/${categoryId}`,

      config
    );

    dispatch({
      type: GET_CATEGORY_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({ type: GET_CATEGORY_DETAILS_FAIL, payload: error.message });
  }
};

export const getBrand = () => async (dispatch) => {
  try {
    dispatch({ type: GET_BRAND_REQUEST });
    // const config = { headers: { "Content-Type": "application/json" } };
    const data = await axios.get(
      `http://localhost:3001/api/brands`,

      // config
    );

    dispatch({
      type: GET_BRAND_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({ type: GET_BRAND_FAIL, payload: error.message });
  }
};

export const getBrandDetails = (brandId) => async (dispatch) => {
  try {
    dispatch({ type: GET_BRAND_DETAILS_REQUEST });
    const config = { headers: { "Content-Type": "application/json" } };
    const data = await axios.get(
      `http://localhost:3001/api/brands/${brandId}`,

      config
    );

    dispatch({
      type: GET_BRAND_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({ type: GET_BRAND_DETAILS_FAIL, payload: error.message });
  }
};

export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};
