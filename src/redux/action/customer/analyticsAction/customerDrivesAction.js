import * as types from "../../../config/actionType";

export const customerDrivesRequest = () => {
  return {
    type: types.CUSTOMER_DRIVES_REQUEST,
  };
};
export const customerDrivesSuccess = (payload) => {
  return {
    type: types.CUSTOMER_DRIVES_SUCCESS,
    payload,
  };
};
export const customerDrivesError = (payload) => {
  return {
    type: types.CUSTOMER_DRIVES_ERROR,
    payload,
  };
};
