import * as types from "../../../config/actionType";

export const collectorPendingAcceptRequest = (payload) => {
  return {type: types.COLLECTOR_PENDING_ACCEPT_REQUEST, payload};
};
export const collectorPendingAcceptSuccess = (payload) => {
  return {type: types.COLLECTOR_PENDING_ACCEPT_SUCCESS, payload};
};
export const collectorPendingAcceptError = (payload) => {
  return {type: types.COLLECTOR_PENDING_ACCEPT_ERROR, payload};
};
