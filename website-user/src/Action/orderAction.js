import axios from "axios";
import {
  CREATE_ORDER_FAIL,
  CREATE_ORDER_REQUEST,
  CREATE_ORDER_SUCCESS,
} from "../Constants/orderConstants";

export const orderCheckout =
  (userId, items,totalCost, paymentMethod, shippingAddress, status,) =>
  async (dispatch) => {
    try {
      dispatch({ type: CREATE_ORDER_REQUEST });
      const config = { headers: { "Content-Type": "application/json" } };
      const { data } = await axios.post(
        `http://localhost:3001/api/checkout`,
        {
          userId,
          items,
          paymentMethod,
          status,
          totalCost,
          shippingAddress,
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
