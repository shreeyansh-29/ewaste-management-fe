import * as types from "../../config/actionType";

export const forgotPasswordRequest = (payload) => {
  return {
    type: types.FORGOT_PASSWORD_REQUEST,
    payload,
  };
};

export const forgotPasswordSuccess = (payload) => {
  return {
    type: types.FORGOT_PASSWORD_SUCCESS,
    payload,
  };
};
export const forgotPasswordError = (payload) => {
  return {
    type: types.FORGOT_PASSWORD_ERROR,
    payload,
  };
};
