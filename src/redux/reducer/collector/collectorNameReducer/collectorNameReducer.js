/* eslint-disable indent */
import * as types from "../../../config/actionType";

const initialState = {
  data: {},
  isLoading: false,
  error: "",
};

export const collectorNameReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.COLLECTOR_NAME_REQUEST:
      return {...state, isLoading: true};
    case types.COLLECTOR_NAME_SUCCESS:
      // console.log("success reducer", action);
      return {...state, data: action};
    case types.COLLECTOR_NAME_ERROR:
      return {...state, error: action};
    default:
      return state;
  }
};
