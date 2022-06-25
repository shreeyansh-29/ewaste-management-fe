import * as types from "../../../config/actionType";

export const customerExpiredRequest = () => {
  return {
    type: types.CUSTOMER_EXPIRED_REQUEST,
  };
};

export const customerExpiredSuccess = (payload) => {
  return {
    type: types.CUSTOMER_EXPIRED_SUCCESS,
    payload,
  };
};

export const customerExpiredError = (payload) => {
  return {
    type: types.CUSTOMER_EXPIRED_ERROR,
    payload,
  };
};
