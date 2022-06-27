import * as types from "../../../config/actionType";

export const vendorMyOrdersRequest = () => {
  return {type: types.VENDOR_MYORDERS_REQUEST};
};
export const vendorMyOrdersSuccess = (payload) => {
  return {type: types.VENDOR_MYORDERS_SUCCESS, payload};
};
export const vendorMyOrdersError = (payload) => {
  return {type: types.VENDOR_MYORDERS_ERROR, payload};
};
