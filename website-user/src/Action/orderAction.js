import axios from "axios";
import {
  CREATE_ORDER_FAIL,
  CREATE_ORDER_PAYMENT_FAIL,
  CREATE_ORDER_PAYMENT_REQUEST,
  CREATE_ORDER_PAYMENT_SUCCESS,
  CREATE_ORDER_REQUEST,
  CREATE_ORDER_SUCCESS,
  GET_ORDER_DETAILS_FAIL,
  GET_ORDER_DETAILS_REQUEST,
  GET_ORDER_DETAILS_SUCCESS,
} from "../Constants/orderConstants";
import { baseURL } from "./baseUrl";

export const orderCheckout =
  (
    userId,
    items,
    totalCost,
    paymentMethod,
    shippingAddress,
    status,
    shippingCharges
  ) =>
    async (dispatch) => {
      try {
        dispatch({ type: CREATE_ORDER_REQUEST });
        const config = { headers: { "Content-Type": "application/json" } };
        const { data } = await axios.post(
          `${baseURL}/checkout`,
          {
            userId,
            items,
            totalCost,
            paymentMethod,
            shippingAddress,
            status,
            shippingCharges,
          },
          config
        );
        console.log(data);
        dispatch({
          type: CREATE_ORDER_SUCCESS,
          payload: data,
        });
      } catch (error) {
        dispatch({
          type: CREATE_ORDER_FAIL,
          payload: error.message,
        });
      }
    };

export const orderPaymentCallback =
  (orderId, transactionId, transactionTime, paymentStatus) =>
    async (dispatch) => {
      try {
        dispatch({ type: CREATE_ORDER_PAYMENT_REQUEST });
        const config = { headers: { "Content-Type": "application/json" } };
        const { data } = await axios.post(
          `${baseURL}/payment/callback`,

          orderId,
          transactionId,
          transactionTime,
          paymentStatus,
          config
        );
        console.log(data);
        dispatch({
          type: CREATE_ORDER_PAYMENT_SUCCESS,
          payload: data,
        });
      } catch (error) {
        dispatch({
          type: CREATE_ORDER_PAYMENT_FAIL,
          payload: error.message,
        });
      }
    };

export const getOrderDetils = (userId) => async (dispatch) => {
  try {
    dispatch({ type: 'GET_ORDER_DETAILS_REQUEST' });
    const data = await axios.get(`${baseURL}/order/${userId}`);
    dispatch({ type: 'GET_ORDER_DETAILS_SUCCESS', payload: data });
  } catch (error) {
    dispatch({ type: 'GET_ORDER_DETAILS_FAIL', payload: error.message, });
  }
};
