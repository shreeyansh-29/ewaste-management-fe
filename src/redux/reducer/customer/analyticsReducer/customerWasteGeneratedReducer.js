/* eslint-disable indent */
import * as types from "../../../config/actionType";

const initialState = {
  data: {},
  isLoading: false,
  error: "",
};

export const customerWasteGeneratedReducer = (
  state = initialState,
  action = action
) => {
  switch (action.type) {
    case types.CUSTOMER_WASTEGENERATAED_REQUEST:
      return {...state, isLoading: true};
    case types.CUSTOMER_WASTEGENERATAED_SUCCESS:
      return {...state, data: action.payload};
    case types.CUSTOMER_WASTEGENERATAED_ERROR:
      return {...state, error: action};
    default:
      return state;
  }
};
