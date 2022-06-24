/* eslint-disable indent */
import * as types from "../../config/actionType";

const initialState = {
  data: {},
  isLoading: false,
  error: "",
};

export const collectorProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.COLLECTOR_PROFILE_REQUEST:
      return {...state, isLoading: true};
    case types.COLLECTOR_PROFILE_SUCCESS:
      console.log("success reducer", action);
      return {...state, data: action};
    case types.COLLECTOR_PROFILE_ERROR:
      return {...state, error: action};
    default:
      return state;
  }
};
