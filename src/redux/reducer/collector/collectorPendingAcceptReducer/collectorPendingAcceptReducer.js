/* eslint-disable indent */
import * as types from "../../../config/actionType";

const initialState = {
  data: {},
  isLoading: false,
  error: "",
};

export const collectorPendingAcceptReducer = (
  state = initialState,
  action = action
) => {
  switch (action.type) {
    case types.COLLECTOR_PENDING_ACCEPT_REQUEST:
      return {...state, isLoading: false};
    case types.COLLECTOR_PENDING_ACCEPT_SUCCESS:
      console.log(action);
      return {...state, data: action.payload};
    case types.COLLECTOR_PENDING_ACCEPT_ERROR:
      return {...state, error: action};
    default:
      return state;
  }
};
