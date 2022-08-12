import * as types from "../../../config/actionType";

export const customerEWasteDrivesRequest = () => {
  return {
    type: types.CUSTOMER_EWASTE_DRIVES_REQUEST,
  };
};
export const customerEWasteDrivesSuccess = (payload) => {
  return {
    type: types.CUSTOMER_EWASTE_DRIVES_SUCCESS,
    payload,
  };
};
export const customerEWasteDrivesError = (payload) => {
  return {
    type: types.CUSTOMER_EWASTE_DRIVES_ERROR,
    payload,
  };
};
