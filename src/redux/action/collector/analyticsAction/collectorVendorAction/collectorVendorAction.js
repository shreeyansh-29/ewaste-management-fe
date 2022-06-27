import * as types from "../../../../config/actionType";

export const collectorVendorAction = () => {
  return {type: types.COLLECTOR_VENDOR_REQUEST};
};
export const collectorVendorSuccess = (payload) => {
  return {type: types.COLLECTOR_VENDOR_SUCCESS, payload};
};
export const collectorVendorError = (payload) => {
  return {type: types.COLLECTOR_VENDOR_ERROR, payload};
};
