/* eslint-disable indent */
import * as types from "../../../config/actionType";

const initialState = {
  data: {},
  isLoading: false,
  error: "",
};

export const customerNotificationCountReducer = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case types.CUSTOMER_NOTIFICATION_COUNT_REQUEST:
      // console.log("Reducer", action);
      return {
        ...state,
        isLoading: true,
      };
    case types.CUSTOMER_NOTIFICATION_COUNT_SUCCESS:
      // console.log("success reducer", action);
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