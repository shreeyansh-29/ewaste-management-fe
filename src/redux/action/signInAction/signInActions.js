import {
  SIGN_IN_ERROR,
  SIGN_IN_REQUEST,
  SIGN_IN_SUCCESS,
} from "../../config/actionType";

export const signInRequest = (payload) => {
  return {
    type: SIGN_IN_REQUEST,
    payload,
  };
};

export const signInSuccess = (payload) => {
  return {
    type: SIGN_IN_SUCCESS,
    payload,
  };
};

export const signInError = (payload) => {
  return {
    type: SIGN_IN_ERROR,
    payload,
  };
};
