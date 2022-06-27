/* eslint-disable indent */
import * as types from "../../../config/actionType";

const initialState = {
  data: {},
  isLoading: false,
  error: "",
};

export const customerPendingRequestReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.CUSTOMER_PENDING_REQUEST:
      return {...state, isLoading: true};
    case types.CUSTOMER_PENDING_SUCCESS:
      console.log("Success action", action);
      return {...state, data: action};
    case types.CUSTOMER_PENDING_ERROR:
      return {...state, error: action};
    default:
      return state;
  }
};