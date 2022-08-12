import * as types from "../../../config/actionType";

export const vendorVendorDataRequest = () => {
  return {type: types.VENDOR_VENDOR_DATA_REQUEST};
};
export const vendorVendorDataSuccess = (payload) => {
  return {type: types.VENDOR_VENDOR_DATA_SUCCESS, payload};
};
export const vendorVendorDataError = (payload) => {
  return {type: types.VENDOR_VENDOR_DATA_ERROR, payload};
};
