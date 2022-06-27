import * as types from "../../../../config/actionType";

export const vendorCategoryRequest = () => {
  return {type: types.VENDOR_CATEGORY_REQUEST};
};
export const vendorCategorySuccess = (payload) => {
  return {type: types.VENDOR_CATEGORY_SUCCESS, payload};
};
export const vendorCategoryError = (payload) => {
  return {type: types.VENDOR_CATEGORY_ERROR, payload};
};
