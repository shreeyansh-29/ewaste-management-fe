import * as types from "../../config/actionType";

export const viewCustomerProfileRequest = (payload) => {
  return {
    type: types.COLLECTOR_CUSTOMERPROFILE_REQUEST,
    payload,
  };
};
export const viewCustomerProfileSuccess = (payload) => {
  return {
    type: types.COLLECTOR_CUSTOMERPROFILE_SUCCESS,
    payload,
  };
};
export const viewCustomerProfileError = (payload) => {
  return {
    type: types.COLLECTOR_CUSTOMERPROFILE_ERROR,
    payload,
  };
};
