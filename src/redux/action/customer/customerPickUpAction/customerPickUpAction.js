import * as types from "../../../config/actionType";

export const customerPickUpRequest = (payload) => {
  return {
    type: types.CUSTOMER_PICKUP_REQUEST,
    payload,
  };
};

export const customerPickUpSuccess = (payload) => {
  return {
    type: types.CUSTOMER_PICKUP_SUCCESS,
    payload,
  };
};

export const customerPickUpError = (payload) => {
  return {
    type: types.CUSTOMER_PICKUP_ERROR,
    payload,
  };
};
