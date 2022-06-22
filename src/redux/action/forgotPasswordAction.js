import * as types from "../config/actionType";

export const forgotPasswordRequest = (email) => {
  return {
    type: types.FORGOT_PASSWORD_REQUEST,
    email,
  };
};

export const forgotPasswordSuccess = (status) => {
  return {
    type: types.FORGOT_PASSWORD_SUCCESS,
    status,
  };
};
export const forgotPasswordError = (error) => {
  return {
    type: types.FORGOT_PASSWORD_ERROR,
    error,
  };
};
