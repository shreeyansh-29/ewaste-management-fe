/* eslint-disable indent */
import * as types from "../../../config/actionType";

const initialState = {
  data: {},
  isLoading: false,
  error: "",
};

export const vendorViewItemsReducer = (
  state = initialState,
  {type, payload}
) => {
  switch (type) {
    case types.VENDOR_VIEW_ITEMS_REQUEST:
      return {...state, isLoading: true};
    case types.VENDOR_VIEW_ITEMS_SUCCESS:
      return {...state, data: payload};
    case types.VENDOR_VIEW_ITEMS_ERROR:
      return {...state, error: payload};
    default:
      return state;
  }
};
