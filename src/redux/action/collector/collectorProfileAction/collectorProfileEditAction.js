import * as types from "../../../config/actionType";

export const collectorProfileEditRequest = (payload) => {
  return {type: types.COLLECTOR_PROFILE_EDIT_REQUEST, payload};
};
export const collectorProfileEditSuccess = (payload) => {
  return {type: types.COLLECTOR_PROFILE_EDIT_SUCCESS, payload};
};
export const collectorProfileEditError = (payload) => {
  return {type: types.COLLECTOR_PROFILE_EDIT_ERROR, payload};
};
