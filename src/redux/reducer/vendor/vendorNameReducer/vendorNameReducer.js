/* eslint-disable indent */
import * as types from "../../../config/actionType";

const initialState = {
  data: {},
  isLoading: false,
  error: "",
};

export const vendorNameReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.VENDOR_NAME_REQUEST:
      return {...state, isLoading: true};
    case types.VENDOR_NAME_SUCCESS:
      // console.log("Success Reducer", action);
      return {...state, data: action};
    case types.VENDOR_NAME_ERROR:
      return {...state, error: action};
    default:
      return state;
  }
};