/* eslint-disable indent */
import * as types from "../../../config/actionType";

const initialState = {
  data: {},
  isLoading: false,
  error: "",
};

export const collectorAvailableReducer = (
  state = initialState,
  {type, payload}
) => {
  switch (type) {
    case types.COLLECTOR_AVAILABLE_REQUEST:
      return {...state, isLoading: true};
    case types.COLLECTOR_AVAILABLE_SUCCESS:
      return {...state, data: payload};
    case types.COLLECTOR_AVAILABLE_ERROR:
      return {...state, error: payload};
    default:
      return state;
  }
};
