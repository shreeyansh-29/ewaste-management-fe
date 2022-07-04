/* eslint-disable indent */
import * as types from "../../../config/actionType";

const initialState = {
  data: {},
  isLoading: false,
  error: "",
};

export const customerDrivesReducer = (
  state = initialState,
  action = action
) => {
  switch (action.type) {
    case types.CUSTOMER_DRIVES_REQUEST:
      return {...state, isLoading: true};
    case types.CUSTOMER_DRIVES_SUCCESS:
      return {...state, data: action.payload};
    case types.CUSTOMER_DRIVES_ERROR:
      return {...state, error: action};
    default:
      return state;
  }
};
