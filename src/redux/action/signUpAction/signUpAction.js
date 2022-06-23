import * as types from "../../config/actionType";

export const signUpRequest = (data) => {
  return {
    type: types.SIGN_UP_REQUEST,
    data,
  };
};

export const signUpSuccess = (response) => {
  return {
    type: types.SIGN_UP_SUCCESS,
    response,
  };
};

export const signUpError = (error) => {
  return {
    type: types.SIGN_UP_ERROR,
    error,
  };
};
