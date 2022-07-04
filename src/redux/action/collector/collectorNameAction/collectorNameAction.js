import * as types from "../../../config/actionType";

export const collectorNameRequest = () => {
  return {type: types.COLLECTOR_NAME_REQUEST};
};

export const collectorNameSuccess = (payload) => {
  return {type: types.COLLECTOR_NAME_SUCCESS, payload: payload.firstName};
};

export const collectorNameError = (payload) => {
  return {type: types.COLLECTOR_NAME_ERROR, payload};
};
