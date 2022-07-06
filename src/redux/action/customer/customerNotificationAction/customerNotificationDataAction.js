import * as types from "../../../config/actionType";

export const customerNotificationDataRequest = () => {
  return {type: types.CUSTOMER_NOTIFICATION_DATA_REQUEST};
};

export const customerNotificationDataSuccess = (payload) => {
  return {type: types.CUSTOMER_NOTIFICATION_DATA_SUCCESS, payload};
};

export const customerNotificationDataError = (payload) => {
  return {type: types.CUSTOMER_NOTIFICATION_DATA_ERROR, payload};
};
