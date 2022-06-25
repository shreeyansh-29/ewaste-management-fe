/* eslint-disable indent */
import * as types from "../../../config/actionType";

const initialState = {
  data: {},
  isLoading: false,
  error: "",
};

export const customerNameReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.CUSTOMER_NAME_REQUEST:
      return {...state, isLoading: true};
    case types.CUSTOMER_NAME_SUCCESS:
      return {...state, data: action};
    case types.CUSTOMER_NAME_ERROR:
      return {...state, error: action};
    default:
      return state;
  }
};

// console.log("success reducer", action);
