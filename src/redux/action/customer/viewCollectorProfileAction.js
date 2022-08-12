import * as types from "../../config/actionType";

export const viewCollectorProfileRequest = (payload) => {
  return {
    type: types.CUSTOMER_COLLECTORPROFILE_REQUEST,
    payload,
  };
};
export const viewCollectorProfileSuccess = (payload) => {
  return {
    type: types.CUSTOMER_COLLECTORPROFILE_SUCCESS,
    payload,
  };
};
export const viewCollectorProfileError = (payload) => {
  return {
    type: types.CUSTOMER_COLLECTORPROFILE_ERROR,
    payload,
  };
};
