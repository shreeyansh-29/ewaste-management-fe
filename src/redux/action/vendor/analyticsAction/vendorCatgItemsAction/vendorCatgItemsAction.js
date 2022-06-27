import * as types from "../../../../config/actionType";

export const vendorCatgItemsRequest = () => {
  return {type: types.VENDOR_CATGITEMS_REQUEST};
};
export const vendorCatgItemsSuccess = (payload) => {
  return {type: types.VENDOR_CATGITEMS_SUCCESS, payload};
};
export const vendorCatgItemsError = (payload) => {
  return {type: types.VENDOR_CATGITEMS_ERROR, payload};
};
