import * as types from "../../config/actionType";

export const vendorViewAcceptCollectorRequest = (payload) => {
  return {
    type: types.VENDOR_COLLECTORPROFILE_REQUEST,
    payload,
  };
};
export const vendorViewAcceptCollectorSuccess = (payload) => {
  return {
    type: types.VENDOR_COLLECTORPROFILE_SUCCESS,
    payload,
  };
};
export const vendorViewAcceptCollectorError = (payload) => {
  return {
    type: types.VENDOR_COLLECTORPROFILE_ERROR,
    payload,
  };
};
