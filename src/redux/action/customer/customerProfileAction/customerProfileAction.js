import * as types from "../../../config/actionType";

export const customerProfileRequest = () => {
  return {type: types.CUSTOMER_PROFILE_REQUEST};
};

export const customerProfileSuccess = (payload) => {
  console.log("success action", payload);
  return {type: types.CUSTOMER_PROFILE_SUCCESS, payload};
};

export const customerProfileError = (payload) => {
  return {type: types.CUSTOMER_PROFILE_ERROR, payload};
};
