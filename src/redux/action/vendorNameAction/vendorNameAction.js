import * as types from "../../config/actionType";

export const vendorNameRequest = () => {
  return {type: types.VENDOR_PROFILE_REQUEST};
};
export const vendorNameSuccess = (payload) => {
  // console.log("Success action", payload);
  return {type: types.VENDOR_PROFILE_SUCCESS, payload};
};
export const vendorNameError = (payload) => {
  return {type: types.VENDOR_PROFILE_ERROR, payload};
};
