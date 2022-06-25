import * as types from "../../../config/actionType";

export const customerDropOffRequest = (payload) => {
  return {
    type: types.CUSTOMER_DROPOFF_REQUEST,
    payload,
  };
};
export const customerDropOffSuccess = (payload) => {
  return {
    type: types.CUSTOMER_DROPOFF_SUCCESS,
    payload,
  };
};
export const customerDropOffError = (payload) => {
  return {
    type: types.CUSTOMER_DROPOFF_ERROR,
    payload,
  };
};
