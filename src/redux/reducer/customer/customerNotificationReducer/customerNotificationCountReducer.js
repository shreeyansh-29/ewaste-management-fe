/* eslint-disable indent */
import * as types from "../../../config/actionType";

const initialState = {
  data: {},
  isLoading: false,
  error: "",
};

export const customerNotificationCountReducer = (
  state = initialState,
  action = action
) => {
  switch (action.type) {
    case types.CUSTOMER_NOTIFICATION_COUNT_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case types.CUSTOMER_NOTIFICATION_COUNT_SUCCESS:
      return {
        ...state,
        data: action,
      };
    case types.CUSTOMER_NOTIFICATION_COUNT_ERROR:
      return {
        ...state,
        error: action,
      };
    default:
      return state;
  }
};
