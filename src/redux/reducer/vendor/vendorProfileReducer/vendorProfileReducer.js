/* eslint-disable indent */
import * as types from "../../../config/actionType";

const initialState = {
  data: {},
  error: "",
  isLoading: false,
};

export const vendorProfileReducer = (state = initialState, action = action) => {
  switch (action.type) {
    case types.VENDOR_PROFILE_REQUEST:
      return {...state, isLoading: true};
    case types.VENDOR_PROFILE_SUCCESS:
      return {...state, data: action.payload};
    case types.VENDOR_PROFILE_ERROR:
      return {...state, error: action};
    default:
      return state;
  }
};
