/* eslint-disable indent */
import * as types from "../../../config/actionType";

const initialState = {
  data: {},
  isLoading: false,
  error: "",
};

export const vendorNameReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case types.VENDOR_NAME_REQUEST:
      return {...state, isLoading: true};
    case types.VENDOR_NAME_SUCCESS:
      return {...state, data: payload};
    case types.VENDOR_NAME_ERROR:
      return {...state, error: payload};
    default:
      return state;
  }
};
