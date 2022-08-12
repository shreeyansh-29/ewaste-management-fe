import * as types from "../../config/actionType";

export const resetPasswordRequest = (payload) => {
  return {
    type: types.RESET_PASSWORD_REQUEST,
    payload,
  };
};

export const resetPasswordSuccess = (payload) => {
  return {
    type: types.RESET_PASSWORD_SUCCESS,
    payload,
  };
};

export const resetPasswordError = (payload) => {
  return {
    type: types.RESET_PASSWORD_ERROR,
    payload,
  };
};
