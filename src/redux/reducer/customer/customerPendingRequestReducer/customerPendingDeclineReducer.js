/* eslint-disable indent */
import * as types from "../../../config/actionType";

const initialState = {
  data: {},
  isLoading: false,
  error: "",
};

export const customerPendingDeclineReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.CUSTOMER_PENDING_DECLINE_REQUEST:
      return {...state, isLoading: true};
    case types.CUSTOMER_PENDING_DECLINE_SUCCESS:
      return {...state, isLoading: true};
    case types.CUSTOMER_PENDING_DECLINE_ERROR:
      return {...state, isLoading: true};
    default:
      return state;
  }
};
