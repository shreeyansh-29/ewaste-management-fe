/* eslint-disable indent */
import * as types from "../../../config/actionType";

const initialState = {
  data: {},
  isLoading: false,
  error: "",
};

export const customerPendingDeclineReducer = (
  state = initialState,
  {type, payload}
) => {
  switch (type) {
    case types.CUSTOMER_PENDING_DECLINE_REQUEST:
      return {...state, isLoading: true};
    case types.CUSTOMER_PENDING_DECLINE_SUCCESS:
      return {...state, data: payload};
    case types.CUSTOMER_PENDING_DECLINE_ERROR:
      return {...state, error: payload};
    default:
      return state;
  }
};
