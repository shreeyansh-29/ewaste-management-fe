import * as types from "../../../config/actionType";

export const collectorAvailableRequest = () => {
  return {type: types.COLLECTOR_AVAILABLE_REQUEST};
};
export const collectorAvailableSuccess = (payload) => {
  return {type: types.COLLECTOR_AVAILABLE_SUCCESS, payload};
};
export const collectorAvailableError = (payload) => {
  return {type: types.COLLECTOR_AVAILABLE_ERROR, payload};
};
