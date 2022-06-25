/* eslint-disable indent */
import * as types from "../../../config/actionType";

const initialState = {
  data: {},
  isLoading: false,
  error: "",
};

export const customerDropOffReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.CUSTOMER_DROPOFF_REQUEST:
      return {...state, isLoading: true};
    case types.CUSTOMER_DROPOFF_SUCCESS:
      console.log("success reducer", action);
      return {...state, data: action};
    case types.CUSTOMER_DROPOFF_ERROR:
      return {...state, error: action};
    default:
      return state;
  }
};
