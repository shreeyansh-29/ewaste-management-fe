/* eslint-disable indent */
import * as types from "../../../config/actionType";

const initialState = {
  data: {},
  isLoading: false,
  error: "",
};

export const collectorSoldReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case types.COLLECTOR_SOLD_REQUEST:
      return {...state, isLoading: true};
    case types.COLLECTOR_SOLD_SUCCESS:
      return {...state, data: payload};
    case types.COLLECTOR_SOLD_ERROR:
      return {...state, error: payload};
    default:
      return state;
  }
};
