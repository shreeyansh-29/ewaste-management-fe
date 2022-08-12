import * as types from "../../../config/actionType";

export const vendorNameRequest = () => {
  return {type: types.VENDOR_NAME_REQUEST};
};
export const vendorNameSuccess = (payload) => {
  return {type: types.VENDOR_NAME_SUCCESS, payload};
};
export const vendorNameError = (payload) => {
  return {type: types.VENDOR_NAME_ERROR, payload};
};
