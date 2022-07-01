import * as types from "../../../redux/config/actionType";

export const googleSignInRequest = (payload) => {
  return {type: types.GOOGLE_SIGNIN_REQUEST, payload};
};
export const googleSignInSuccess = (payload) => {
  return {type: types.GOOGLE_SIGNIN_SUCCESS, payload};
};
export const googleSignInError = (payload) => {
  return {type: types.GOOGLE_SIGNIN_ERROR, payload};
};
