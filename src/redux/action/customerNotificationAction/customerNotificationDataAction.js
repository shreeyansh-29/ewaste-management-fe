import * as types from "../../config/actionType";

export const customerNotificationDataRequest = () => {
  return {type: types.COLLECTOR_NOTIFICATION_DATA_REQUEST};
};

export const customerNotificationDataSuccess = (payload) => {
  console.log("success action", payload);
  return {type: types.COLLECTOR_NOTIFICATION_DATA_SUCCESS, payload};
};

export const customerNotificationDataError = (payload) => {
  return {type: types.COLLECTOR_NOTIFICATION_DATA_ERROR, payload};
};
