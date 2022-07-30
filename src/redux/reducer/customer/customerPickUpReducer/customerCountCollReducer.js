/* eslint-disable indent */
import * as types from "../../../config/actionType";

const initialState = {
  data: {},
  isLoading: false,
  error: "",
};

export const customerCountCollReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.CUSTOMER_COUNT_COLL_REQUEST:
      return {...state, isLoading: true};
    case types.CUSTOMER_COUNT_COLL_SUCCESS:
      return {...state, data: action.payload};
    case types.CUSTOMER_COUNT_COLL_ERROR:
      return {...state, error: action};
    default:
      return state;
  }
};
