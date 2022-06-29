import * as types from "../../config/actionType";
export const cusRequestCollectorRequest = (response) => {
  return {
    type: types.CUSTOMER_COLLECTORPROFILE_REQUEST,
    response,
  };
};
export const cusRequestCollectorSuccess = (response) => {
  return {
    type: types.CUSTOMER_COLLECTORPROFILE_SUCCESS,
    response,
  };
};
export const cusRequestCollectorError = (error) => {
  return {
    type: types.CUSTOMER_COLLECTORPROFILE_ERROR,
    error,
  };
};
