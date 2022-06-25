import * as types from "../../../config/actionType";

export const collectorNotificationCountRequest = () => {
  return {
    type: types.COLLECTOR_NOTIFICATION_COUNT_REQUEST,
  };
};

export const collectorNotificationCountSuccess = (payload) => {
  console.log("success action", payload);
  return {
    type: types.COLLECTOR_NOTIFICATION_COUNT_SUCCESS,
    payload,
  };
};

export const collectorNotificationCountError = (payload) => {
  return {
    type: types.COLLECTOR_NOTIFICATION_COUNT_ERROR,
    payload,
  };
};
