import * as types from "../../../config/actionType";

export const vendorViewItemsRequest = () => {
  return {
    type: types.VENDOR_VIEW_ITEMS_REQUEST,
  };
};
export const vendorViewItemsSuccess = (payload) => {
  return {
    type: types.VENDOR_VIEW_ITEMS_SUCCESS,
    payload,
  };
};
export const vendorViewItemsError = (payload) => {
  return {
    type: types.VENDOR_VIEW_ITEMS_ERROR,
    payload,
  };
};
