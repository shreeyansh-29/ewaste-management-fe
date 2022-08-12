import * as types from "../../../config/actionType";

export const collectorNotificationDataRequest = () => {
  return {type: types.COLLECTOR_NOTIFICATION_DATA_REQUEST};
};

export const collectorNotificationDataSuccess = (payload) => {
  return {type: types.COLLECTOR_NOTIFICATION_DATA_SUCCESS, payload};
};

export const collectorNotificationDataError = (payload) => {
  return {type: types.COLLECTOR_NOTIFICATION_DATA_ERROR, payload};
};
