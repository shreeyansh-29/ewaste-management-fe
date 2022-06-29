import * as types from "../../../config/actionType";

export const collectorOrganizeDriveRequest = (payload) => {
  console.log(payload);
  return {type: types.COLLECTOR_ORGANIZE_REQUEST, payload};
};
export const collectorOrganizeDriveSuccess = (payload) => {
  console.log(payload);
  return {type: types.COLLECTOR_ORGANIZE_SUCCESS, payload};
};
export const collectorOrganizeDriveError = (payload) => {
  return {type: types.COLLECTOR_ORGANIZE_ERROR, payload};
};
