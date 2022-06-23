import {
  SIGN_IN_ERROR,
  SIGN_IN_REQUEST,
  SIGN_IN_SUCCESS,
} from "../../config/actionType";

export const signInRequest = (data) => {
  // console.log("Signaction", data);
  return {
    type: SIGN_IN_REQUEST,
    data,
  };
};

export const signInSuccess = (response) => {
  return {
    type: SIGN_IN_SUCCESS,
    response,
  };
};

export const signInError = (error) => {
  // console.log(error);
  return {
    type: SIGN_IN_ERROR,
    error,
  };
};
