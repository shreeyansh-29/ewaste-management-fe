import * as types from "../../../config/actionType";

export const collectorPendingRequest = () => {
  return {type: types.COLLECTOR_PENDING_REQUEST};
};
export const collectorPendingSuccess = (payload) => {
  return {type: types.COLLECTOR_PENDING_SUCCESS, payload};
};
export const collectorPendingError = (payload) => {
  return {type: types.COLLECTOR_PENDING_ERROR, payload};
};
