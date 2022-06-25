/* eslint-disable indent */
import * as types from "../../../config/actionType";

const initialState = {
  data: {},
  isLoading: false,
  error: "",
};

export const customerExpiredRequestReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.CUSTOMER_EXPIRED_REQUEST:
      return {...state, isLoading: true};
    case types.CUSTOMER_EXPIRED_SUCCESS:
      return {...state, data: action};
    case types.CUSTOMER_EXPIRED_ERROR:
      return {...state, error: action};
    default:
      return state;
  }
};
