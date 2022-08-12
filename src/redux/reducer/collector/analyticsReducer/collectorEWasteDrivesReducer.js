/* eslint-disable indent */
import * as types from "../../../config/actionType";

const initialState = {
  data: {},
  isLoading: false,
  error: "",
};

export const collectorEWasteDrivesReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.COLLECTOR_EWASTE_DRIVES_REQUEST:
      return {...state, isLoading: true};
    case types.COLLECTOR_EWASTE_DRIVES_SUCCESS:
      return {...state, data: action.payload};
    case types.COLLECTOR_EWASTE_DRIVES_ERROR:
      return {...state, error: action};
    default:
      return state;
  }
};
