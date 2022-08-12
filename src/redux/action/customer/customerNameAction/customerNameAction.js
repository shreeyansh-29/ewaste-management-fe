import * as types from "../../../config/actionType";

export const customerNameRequest = () => {
  return {type: types.CUSTOMER_NAME_REQUEST};
};

export const customerNameSuccess = (payload) => {
  return {type: types.CUSTOMER_NAME_SUCCESS, payload};
};

export const customerNameError = (payload) => {
  return {type: types.CUSTOMER_NAME_ERROR, payload};
};
