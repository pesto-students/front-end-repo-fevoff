import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import {thunk} from 'redux-thunk';

import * as Sentry from "@sentry/react";

import {productDetailsReducer, productReducer} from "./Reducers/productReducers"
import { userReducer} from "./Reducers/userReducers";

const reducer = combineReducers({
  products: productReducer,
  user: userReducer,
  productDetails: productDetailsReducer
});

const sentryMiddleware = (store) => (next) => (action) => {
  try {
    return next(action);
  } catch (error) {
    Sentry.captureException(error);
    throw error;
  }
};

const store = createStore (
    reducer,
    composeWithDevTools(applyMiddleware(thunk, sentryMiddleware))
)

export default store;