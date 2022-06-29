import * as types from "../../../config/actionType";

export const collectorMyDrivesRequest = () => {
  return {type: types.COLLECTOR_MYDRIVES_REQUEST};
};
export const collectorMyDrivesSuccess = (payload) => {
  return {type: types.COLLECTOR_MYDRIVES_SUCCESS, payload};
};
export const collectorMyDrivesError = (payload) => {
  return {type: types.COLLECTOR_MYDRIVES_ERROR, payload};
};
