/* eslint-disable indent */
import * as types from "../../../config/actionType";

const initialState = {
  data: {},
  isLoading: true,
  error: "",
};

export const vendorVendorDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.VENDOR_VENDOR_DATA_REQUEST:
      return {...state, isLoading: true};
    case types.VENDOR_VENDOR_DATA_SUCCESS:
      return {...state, data: action.payload};
    case types.VENDOR_VENDOR_DATA_ERROR:
      return {...state, error: action};
    default:
      return state;
  }
};
