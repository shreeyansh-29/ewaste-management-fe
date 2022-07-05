import * as types from "../../../config/actionType";

export const customerWasteGeneratedRequest = () => {
  return {
    type: types.CUSTOMER_WASTEGENERATED_REQUEST,
  };
};
export const customerWasteGeneratedSuccess = (payload) => {
  return {
    type: types.CUSTOMER_WASTEGENERATED_SUCCESS,
    payload,
  };
};
export const customerWasteGeneratedError = (payload) => {
  return {
    type: types.CUSTOMER_WASTEGENERATED_ERROR,
    payload,
  };
};
