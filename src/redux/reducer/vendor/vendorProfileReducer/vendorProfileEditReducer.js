/* eslint-disable indent */
import * as types from "../../../config/actionType";

const initialState = {
  data: {},
  isLoading: false,
  error: "",
};

export const vendorProfileEditReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.VENDOR_PROFILE_EDIT_REQUEST:
      return {...state, isLoading: true};
    case types.VENDOR_PROFILE_EDIT_SUCCESS:
      return {...state, data: action.payload};
    case types.VENDOR_PROFILE_EDIT_ERROR:
      return {...state, error: action};
    default:
      return state;
  }
};
