import * as types from "../../../config/actionType";

export const collectorProfileRequest = () => {
  return {type: types.COLLECTOR_PROFILE_REQUEST};
};

export const collectorProfileSuccess = (payload) => {
  console.log("succes action", payload);
  return {type: types.COLLECTOR_PROFILE_SUCCESS, payload};
};

export const collectorProfileError = (payload) => {
  return {type: types.COLLECTOR_PROFILE_ERROR, payload};
};
