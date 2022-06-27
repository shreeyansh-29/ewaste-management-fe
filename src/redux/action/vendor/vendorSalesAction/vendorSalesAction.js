import * as types from "../../../config/actionType";

export const vendorSalesRequest = () => {
  return {
    type: types.VENDOR_SALES_REQUEST,
  };
};
export const vendorSalesSuccess = (payload) => {
  return {
    type: types.VENDOR_SALES_SUCCESS,
    payload,
  };
};
export const vendorSalesError = (payload) => {
  return {
    type: types.VENDOR_SALES_ERROR,
    payload,
  };
};
