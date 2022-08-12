import * as types from "../../../config/actionType";

export const vendorAcceptItemsRequest = (payload) => {
  return {
    type: types.VENDOR_ACCEPT_ITEMS_REQUEST,
    payload,
  };
};
export const vendorAcceptItemsSuccess = (payload) => {
  return {
    type: types.VENDOR_ACCEPT_ITEMS_SUCCESS,
    payload,
  };
};
export const vendorAcceptItemsError = (payload) => {
  return {
    type: types.VENDOR_ACCEPT_ITEMS_ERROR,
    payload,
  };
};
