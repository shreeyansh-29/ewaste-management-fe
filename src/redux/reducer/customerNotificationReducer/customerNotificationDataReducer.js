/* eslint-disable indent */
import * as types from "../../config/actionType";

const initialState = {
  data: {},
  isLoading: false,
  error: "",
};

export const customerNotificationDataReducer = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case types.COLLECTOR_NOTIFICATION_DATA_REQUEST:
      return {...state, isLoading: true};
    case types.COLLECTOR_NOTIFICATION_DATA_SUCCESS:
      console.log("Succes reducer", action);
      return {...state, data: action};
    case types.COLLECTOR_NOTIFICATION_DATA_ERROR:
      return {...state, error: action};
    default:
      return state;
  }
};
