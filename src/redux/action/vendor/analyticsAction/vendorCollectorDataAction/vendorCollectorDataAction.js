import * as types from "../../../../config/actionType";

export const vendorCollectorDataDefault = () => {
  return {type: types.VENDOR_COLLECTOR_DATA_REQUEST};
};
export const vendorCollectorDataSuccess = (payload) => {
  return {type: types.VENDOR_COLLECTOR_DATA_SUCCESS, payload};
};
export const vendorCollectorDataError = (payload) => {
  return {type: types.VENDOR_COLLECTOR_DATA_ERROR, payload};
};
