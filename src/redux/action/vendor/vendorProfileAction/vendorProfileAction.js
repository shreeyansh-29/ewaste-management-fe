import * as types from "../../../config/actionType";

export const vendorProfileRequest = () => {
  return {type: types.VENDOR_PROFILE_REQUEST};
};

export const vendorProfileSuccess = (payload) => {
  return {type: types.VENDOR_PROFILE_SUCCESS, payload};
};

export const vendorProfileError = () => {
  return {type: types.VENDOR_PROFILE_ERROR};
};
