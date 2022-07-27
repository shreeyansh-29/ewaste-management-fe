/* eslint-disable indent */
import * as types from "../../../config/actionType";

const initialState = {
  data: {},
  error: "",
  isLoading: false,
};

export const vendorProfileReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case types.VENDOR_PROFILE_REQUEST:
      return {...state, isLoading: true};
    case types.VENDOR_PROFILE_SUCCESS:
      return {...state, data: payload};
    case types.VENDOR_PROFILE_ERROR:
      return {...state, error: payload};
    default:
      return state;
  }
};
