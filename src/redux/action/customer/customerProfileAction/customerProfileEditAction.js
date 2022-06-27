import * as types from "../../../config/actionType";

export const customerProfileEditRequest = (payload) => {
  return {type: types.CUSTOMER_PROFILE_EDIT_REQUEST, payload};
};
export const customerProfileEditSuccess = (payload) => {
  return {type: types.CUSTOMER_PROFILE_EDIT_SUCCESS, payload};
};
export const customerProfileEditError = (payload) => {
  return {type: types.CUSTOMER_PROFILE_EDIT_ERROR, payload};
};
