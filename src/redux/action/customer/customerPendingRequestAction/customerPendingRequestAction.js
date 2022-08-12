import * as types from "../../../config/actionType";

export const customerPendingRequest = () => {
  return {
    type: types.CUSTOMER_PENDING_REQUEST,
  };
};
export const customerPendingSuccess = (payload) => {
  return {
    type: types.CUSTOMER_PENDING_SUCCESS,
    payload,
  };
};
export const customerPendingError = (payload) => {
  return {
    type: types.CUSTOMER_PENDING_ERROR,
    payload,
  };
};
