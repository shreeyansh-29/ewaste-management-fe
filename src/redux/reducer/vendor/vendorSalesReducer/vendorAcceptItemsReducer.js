/* eslint-disable indent */
import * as types from "../../../config/actionType";

const initialState = {
  data: {},
  isLoading: false,
  error: "",
};

export const vendorAcceptItemsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.VENDOR_ACCEPT_ITEMS_REQUEST:
      return {...state, isLoading: true};
    case types.VENDOR_ACCEPT_ITEMS_SUCCESS:
      return {...state, data: action.payload};
    case types.VENDOR_ACCEPT_ITEMS_ERROR:
      return {...state, error: action};
    default:
      return state;
  }
};
