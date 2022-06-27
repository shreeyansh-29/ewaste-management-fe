import * as types from "../../../config/actionType";

export const customerWasteGeneratedRequest = () => {
  return {
    type: types.CUSTOMER_WASTEGENERATAED_REQUEST,
  };
};
export const customerWasteGeneratedSuccess = (payload) => {
  return {
    type: types.CUSTOMER_WASTEGENERATAED_SUCCESS,
    payload,
  };
};
export const customerWasteGeneratedError = (payload) => {
  return {
    type: types.CUSTOMER_WASTEGENERATAED_ERROR,
    payload,
  };
};
