/* eslint-disable indent */
import * as types from "../../../config/actionType";

const initialState = {
  data: {},
  isLoading: false,
  error: "",
};

export const customerDropOffReducer = (
  state = initialState,
  {type, payload}
) => {
  switch (type) {
    case types.CUSTOMER_DROPOFF_REQUEST:
      return {...state, isLoading: true};
    case types.CUSTOMER_DROPOFF_SUCCESS:
      return {...state, data: payload};
    case types.CUSTOMER_DROPOFF_ERROR:
      return {...state, error: payload};
    default:
      return state;
  }
};
