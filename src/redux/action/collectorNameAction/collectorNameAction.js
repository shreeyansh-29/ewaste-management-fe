import * as types from "../../config/actionType";

export const collectorNameRequest = () => {
  return {type: types.COLLECTOR_PROFILE_REQUEST};
};

export const collectorNameSuccess = (payload) => {
  // console.log("success action", payload);
  return {type: types.COLLECTOR_PROFILE_SUCCESS, payload: payload.firstName};
};

export const collectorNameError = (payload) => {
  return {type: types.COLLECTOR_PROFILE_ERROR, payload};
};
