import * as types from "../../../config/actionType";

export const collectorSoldRequest = (payload) => {
  return {type: types.COLLECTOR_SOLD_REQUEST, payload};
};
export const collectorSoldSuccess = (payload) => {
  return {type: types.COLLECTOR_SOLD_SUCCESS, payload};
};
export const collectorSoldError = (payload) => {
  return {type: types.COLLECTOR_SOLD_ERROR, payload};
};
