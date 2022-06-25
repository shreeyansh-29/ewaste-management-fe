/* eslint-disable indent */
import * as types from "../../../config/actionType";

const initialState = {
  data: {},
  isLoading: false,
  error: "",
};

export const customerEWasteReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.CUSTOMER_EWASTE_DRIVES_REQUEST:
      return {...state, isLoading: true};
    case types.CUSTOMER_EWASTE_DRIVES_SUCCESS:
      return {...state, data: action};
    case types.CUSTOMER_EWASTE_DRIVES_ERROR:
      return {...state, error: action};
    default:
      return state;
  }
};
