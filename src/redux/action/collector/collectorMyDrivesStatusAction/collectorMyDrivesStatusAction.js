import * as types from "../../../config/actionType";

export const collectorMyDrivesStatusRequest = (payload) => {
  return {type: types.COLLECTOR_MYDRIVES_STATUS_REQUEST, payload};
};
export const collectorMyDrivesStatusSuccess = (payload) => {
  return {type: types.COLLECTOR_MYDRIVES_STATUS_SUCCESS, payload};
};
export const collectorMyDrivesStatusError = (payload) => {
  return {type: types.COLLECTOR_MYDRIVES_STATUS_ERROR, payload};
};
