import { DELETE_REVIEW_FAIL, DELETE_REVIEW_SUCCESS } from "../Constants/productConstant";
import {
  CLEAR_ERRORS,
  EDIT_USER_ADDRESS_FAIL,
  EDIT_USER_ADDRESS_REQUEST,
  EDIT_USER_ADDRESS_RESET,
  EDIT_USER_ADDRESS_SUCCESS,
  LOAD_USER_ADDRESS_FAIL,
  LOAD_USER_ADDRESS_REQUEST,
  LOAD_USER_ADDRESS_SUCCESS,
  LOAD_USER_FAIL,
  LOAD_USER_REQUEST,
  LOAD_USER_SUCCESS,
  LOGIN_FAIL,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  OTP_VERIFICATION_FAIL,
  OTP_VERIFICATION_REQUEST,
  OTP_VERIFICATION_SUCCESS,
  REGISTER_USER_FAIL,
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
  SEND_OTP_FAIL,
  SEND_OTP_REQUEST,
  SEND_OTP_SUCCESS,
  USER_DETAILS_FAIL,
  USER_DETAILS_REQUEST,
  USER_DETAILS_SUCCESS,
  ADDRESS_DELETE_SUCCESS,
  ADDRESS_DELETE_FAIL

} from "../Constants/userConstants";

export const userReducer = (state = { user: {} }, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
    case REGISTER_USER_REQUEST:
    case LOAD_USER_REQUEST:
      return {
        ...state,
        loading: true,
        isAuthenticated: false,
      };
    case LOGIN_SUCCESS:
    case REGISTER_USER_SUCCESS:
    case LOAD_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        isAuthenticated: true,
        user: action.payload,
      };

    case LOGIN_FAIL:
    case REGISTER_USER_FAIL:
      return {
        ...state,
        loading: false,
        isAuthenticated: false,
        user: null,
        error: action.payload,
      };

    case LOAD_USER_FAIL:
      return {
        loading: false,
        isAuthenticated: false,
        user: null,
        error: action.payload,
      };

    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

export const userDetailsReducer = (state = { user: {} }, action) => {
  switch (action.type) {
    case USER_DETAILS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case USER_DETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload,
      };
    case USER_DETAILS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

export const userProfileDataReducer = (state = {address:{}}, action) => {
  switch (action.type) {
    case LOAD_USER_ADDRESS_REQUEST:
      case EDIT_USER_ADDRESS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case LOAD_USER_ADDRESS_SUCCESS:
      case EDIT_USER_ADDRESS_SUCCESS:
        case DELETE_REVIEW_SUCCESS:
          case ADDRESS_DELETE_SUCCESS:
      return {
        ...state,
        loading: false,
        address: action.payload,
        isFetched: true,
        isUpdated: true,
      };
    case LOAD_USER_ADDRESS_FAIL:
      case EDIT_USER_ADDRESS_FAIL:
        case DELETE_REVIEW_FAIL:
          case ADDRESS_DELETE_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
      case EDIT_USER_ADDRESS_RESET:
        return{
            ...state,
            isUpdated: false,
        }
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};


export const otpLoginReducer = (state = {}, action)=>{
  switch(action.type){
    case SEND_OTP_REQUEST:
      case OTP_VERIFICATION_REQUEST:
      return{
        loading: true,
      }
      case SEND_OTP_SUCCESS:
        case OTP_VERIFICATION_SUCCESS:
        return{
          loading: false,
          success: action.payload,
        }
        case SEND_OTP_FAIL:
          case OTP_VERIFICATION_FAIL:
          return{
            loading: false,
            error: action.payload,
          }
          default:
            return state;
  }
}