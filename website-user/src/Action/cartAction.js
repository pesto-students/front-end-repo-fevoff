import axios from "axios";
import {
  ADD_TO_CART,
  REMOVE_CART_ITEMS,
  SAVE_SHIPPING_INFO,
  REMOVE_ITEM_FROM_CART_FAIL,
  REMOVE_ITEM_FROM_CART_SUCCESS,
  UPDATE_CART_SUCCESS,
  UPDATE_CART_FAIL,
  CART_ITEM_REQUEST,
  CART_ITEM_SUCCESS,
  CART_ITEM_FAIL,
} from "../Constants/cartConstants";

export const addItemsToCart =
  (userId, productId, quantity) => async (dispatch, getState) => {
    try {
      const config = { headers: { "Content-Type": "application/json" } };
      const { data } = await axios.post(
        `http://localhost:3001/api/cart`,
        userId,
        productId,
        quantity,

        config
      );
      console.log(data);
      dispatch({
        type: ADD_TO_CART,
        payload: data.cartItems,
      });
    } catch (error) {
      console.error("Error adding items to cart:", error);
    }
  };

export const removeItemsToCart =
  (userId, productId) => async (dispatch, getState) => {
    try {
      const res = await axios.delete(
        `http://localhost:3001/api/cart/item/${userId}`,
        { data: { productId } }
      );
      dispatch({ type: REMOVE_ITEM_FROM_CART_SUCCESS, payload: productId });
    } catch (error) {
      dispatch({
        type: REMOVE_ITEM_FROM_CART_FAIL,
        payload: error.message,
      });
    }
  };

export const getCartItems = (userId) => async (dispatch) => {
  try {
    dispatch({ type: CART_ITEM_REQUEST });
    const config = { headers: { "Content-Type": "application/json" } };
    const data = await axios.get(
      `http://localhost:3001/api/cart/${userId}`,
      config
    );
    dispatch({ type: CART_ITEM_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: CART_ITEM_FAIL, payload: error.message });
  }
};

export const updateCart =
  (userId, productId, quantity) => async (dispatch, getState) => {
    try {
      const data = await axios.put(`http://localhost:3001/api/cart/${userId}`, {
        productId,
        quantity,
      });
      dispatch({ type: UPDATE_CART_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: UPDATE_CART_FAIL,
        payload: error.message,
      });
    }
  };

export const saveShippingInfo = (data) => async (dispatch, getState) => {
  dispatch({
    type: SAVE_SHIPPING_INFO,
    payload: data,
  });

  localStorage.setItem("shippingInfo", JSON.stringify(data));
};
