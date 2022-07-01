import * as types from "../../../config/actionType";

export const collectorSummaryRequest = () => {
  return {type: types.COLLECTOR_SUMMARY_REQUEST};
};
export const collectorSummarySuccess = (payload) => {
  return {type: types.COLLECTOR_SUMMARY_SUCCESS, payload};
};
export const collectorSummaryError = (payload) => {
  return {type: types.COLLECTOR_SUMMARY_ERROR, payload};
};
