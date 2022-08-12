/* eslint-disable indent */
import * as types from "../../../config/actionType";

const initialState = {
  data: {},
  isLoading: false,
  error: "",
};

export const collectorProfileEditReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.COLLECTOR_PROFILE_EDIT_REQUEST:
      return {...state, isLoading: true};
    case types.COLLECTOR_PROFILE_EDIT_SUCCESS:
      return {...state, data: action.payload};
    case types.COLLECTOR_PROFILE_EDIT_ERROR:
      return {...state, error: action};
    default:
      return state;
  }
};
