import * as types from "../../config/actionType";

export const customerNameRequest = () => {
  return {type: types.CUSTOMER_PROFILE_REQUEST};
};

export const customerNameSuccess = (payload) => {
  return {type: types.CUSTOMER_PROFILE_SUCCESS, payload: payload.firstName};
};

export const customerNameError = (payload) => {
  return {type: types.CUSTOMER_PROFILE_ERROR, payload};
};
