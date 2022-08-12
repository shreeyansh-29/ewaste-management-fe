import * as types from "../../../config/actionType";

export const vendorProfileEditRequest = (payload) => {
  return {type: types.VENDOR_PROFILE_EDIT_REQUEST, payload};
};
export const vendorProfileEditSuccess = (payload) => {
  return {type: types.VENDOR_PROFILE_EDIT_SUCCESS, payload};
};
export const vendorProfileEditError = (payload) => {
  return {type: types.VENDOR_PROFILE_EDIT_ERROR, payload};
};
