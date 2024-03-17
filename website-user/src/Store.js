import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import {thunk} from 'redux-thunk';


import * as Sentry from "@sentry/react";

import { productDetailsReducer, productReducer } from "./Reducers/productReducers"
import { otpLoginReducer, userDetailsReducer, userProfileDataReducer, userReducer } from "./Reducers/userReducers";
import { cartReducer } from "./Reducers/cartReducers";
import { orderCheckReducer } from "./Reducers/orderReducers";

const reducer = combineReducers({
  products: productReducer,
  user: userReducer,
  productDetails: productDetailsReducer,
  userDetails: userDetailsReducer,
  UserProfileData: userProfileDataReducer,
  otpLogin: otpLoginReducer,
  cart: cartReducer,
  order: orderCheckReducer
});

// let initialState = {
//   cart: {
//     cartItems: localStorage.getItem("cartItems")
//       ? JSON.parse(localStorage.getItem("cartItems"))
//       : [],
//     shippingInfo: localStorage.getItem("shippingInfo")
//       ? JSON.parse(localStorage.getItem("shippingInfo"))
//       : {},
//   },
// };

const sentryMiddleware = (store) => (next) => (action) => {
  try {
    return next(action);
  } catch (error) {
    Sentry.captureException(error);
    throw error;
  }
};

const store = createStore(
  reducer,
  // initialState,
  composeWithDevTools(applyMiddleware(thunk, sentryMiddleware))
)

export default store;