import * as types from "../../../../config/actionType";

export const collectorEWasteDrivesRequest = () => {
  return {type: types.COLLECTOR_EWASTE_DRIVES_REQUEST};
};
export const collectorEWasteDrivesSuccess = (payload) => {
  return {type: types.COLLECTOR_EWASTE_DRIVES_SUCCESS, payload};
};
export const collectorEWasteDrivesError = (payload) => {
  return {type: types.COLLECTOR_EWASTE_DRIVES_ERROR, payload};
};
