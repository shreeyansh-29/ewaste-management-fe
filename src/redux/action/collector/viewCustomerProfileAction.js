import * as types from "../../config/actionType";

export const colRequestCustomerRequest = () => {
  return {
    type: types.COLLECTOR_CUSTOMERPROFILE_REQUEST,
  };
};
export const colRequestCustomerSuccess = (response) => {
  return {
    type: types.COLLECTOR_CUSTOMERPROFILE_SUCCESS,
    response,
  };
};
export const colRequestCustomerError = (error) => {
  return {
    type: types.COLLECTOR_CUSTOMERPROFILE_ERROR,
    error,
  };
};
