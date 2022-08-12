import * as types from "../../../config/actionType";

export const customerCompletedRequest = () => {
  return {
    type: types.CUSTOMER_COMPLETED_REQUEST,
  };
};
export const customerCompletedSuccess = (payload) => {
  return {
    type: types.CUSTOMER_COMPLETED_SUCCESS,
    payload,
  };
};
export const customerCompletedError = (payload) => {
  return {
    type: types.CUSTOMER_COMPLETED_ERROR,
    payload,
  };
};
