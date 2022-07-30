/* eslint-disable indent */
import * as types from "../../../config/actionType";

const initialState = {
  data: {},
  isLoading: false,
  error: "",
};

export const customerPickUpReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.CUSTOMER_PICKUP_REQUEST:
      return {...state, isLoading: true};
    case types.CUSTOMER_PICKUP_SUCCESS:
      return {...state, data: action.payload};
    case types.CUSTOMER_PICKUP_ERROR:
      return {...state, error: action};
    default:
      return state;
  }
};
