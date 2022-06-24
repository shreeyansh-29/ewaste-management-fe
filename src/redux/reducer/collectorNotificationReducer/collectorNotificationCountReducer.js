/* eslint-disable indent */
import * as types from "../../config/actionType";

const initialState = {
  data: {},
  isLoading: false,
  error: "",
};

export const collectorNotificationCountReducer = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case types.COLLECTOR_NOTIFICATION_COUNT_REQUEST:
      return {...state, isLoading: true};
    case types.COLLECTOR_NOTIFICATION_COUNT_SUCCESS:
      console.log("Success reducer", action);
      return {...state, data: action};
    case types.COLLECTOR_NOTIFICATION_COUNT_ERROR:
      return {...state, error: action};
    default:
      return state;
  }
};
