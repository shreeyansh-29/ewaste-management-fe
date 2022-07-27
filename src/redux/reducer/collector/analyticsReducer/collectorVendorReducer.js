/* eslint-disable indent */
import * as types from "../../../config/actionType";

const initialState = {
  data: {},
  isLoading: false,
  error: "",
};

export const collectorVendorReducer = (
  state = initialState,
  {type, payload}
) => {
  switch (type) {
    case types.COLLECTOR_VENDOR_REQUEST:
      return {...state, isLoading: true};
    case types.COLLECTOR_VENDOR_SUCCESS:
      return {...state, data: payload};
    case types.COLLECTOR_VENDOR_ERROR:
      return {...state, error: payload};
    default:
      return state;
  }
};
