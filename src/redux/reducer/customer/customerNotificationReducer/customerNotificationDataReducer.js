/* eslint-disable indent */
import * as types from "../../../config/actionType";

const initialState = {
  data: {},
  isLoading: false,
  error: "",
};

export const customerNotificationDataReducer = (
  state = initialState,
  {type, payload}
) => {
  switch (type) {
    case types.CUSTOMER_NOTIFICATION_DATA_REQUEST:
      return {...state, isLoading: true};
    case types.CUSTOMER_NOTIFICATION_DATA_SUCCESS:
      return {...state, data: payload};
    case types.CUSTOMER_NOTIFICATION_DATA_ERROR:
      return {...state, error: payload};
    default:
      return state;
  }
};
