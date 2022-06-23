import * as types from "../../config/actionType";

export const customerNotificationRequest = () => {
  return {type: types.CUSTOMER_NOTIFICATION_REQUEST};
};

export const customerNotificationSuccess = (payload) => {
  console.log("action success", payload);
  return {type: types.CUSTOMER_NOTIFICATION_SUCCESS, payload};
};

export const customerNotificationError = (payload) => {
  return {type: types.CUSTOMER_NOTIFICATION_ERROR, payload};
};
