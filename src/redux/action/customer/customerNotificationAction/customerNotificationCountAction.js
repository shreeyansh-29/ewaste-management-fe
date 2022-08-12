import * as types from "../../../config/actionType";

export const customerNotificationCountRequest = () => {
  return {type: types.CUSTOMER_NOTIFICATION_COUNT_REQUEST};
};

export const customerNotificationCountSuccess = (payload) => {
  return {type: types.CUSTOMER_NOTIFICATION_COUNT_SUCCESS, payload};
};

export const customerNotificationCountError = (payload) => {
  return {type: types.CUSTOMER_NOTIFICATION_COUNT_ERROR, payload};
};
