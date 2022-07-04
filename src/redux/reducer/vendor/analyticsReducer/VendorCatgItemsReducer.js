/* eslint-disable indent */
import * as types from "../../../config/actionType";

const initialState = {
  data: {},
  isLoading: true,
  error: "",
};

export const vendorCatgItemsReducer = (
  state = initialState,
  action = action
) => {
  switch (action.type) {
    case types.VENDOR_CATGITEMS_REQUEST:
      return {...state, isLoading: true};
    case types.VENDOR_CATGITEMS_SUCCESS:
      return {...state, data: action.payload};
    case types.VENDOR_CATGITEMS_ERROR:
      return {...state, error: action};
    default:
      return state;
  }
};
