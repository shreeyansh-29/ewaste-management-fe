/* eslint-disable indent */
import * as types from "../../../config/actionType";

const initialState = {
  data: {},
  isLoading: false,
  error: "",
};

export const vendorMyOrdersReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.VENDOR_MYORDERS_REQUEST:
      return {...state, isLoading: true};
    case types.VENDOR_MYORDERS_SUCCESS:
      console.log(action);
      return {...state, data: action.payload};
    case types.VENDOR_MYORDERS_ERROR:
      return {...state, error: action};
    default:
      return state;
  }
};