/* eslint-disable indent */
import * as types from "../../../config/actionType";

const initialState = {
  data: {},
  isLoading: false,
  error: "",
};

export const vendorCollectorDataReducer = (
  state = initialState,
  {type, payload}
) => {
  switch (type) {
    case types.VENDOR_COLLECTOR_DATA_REQUEST:
      return {...state, isLoading: true};
    case types.VENDOR_COLLECTOR_DATA_SUCCESS:
      return {...state, data: payload};
    case types.VENDOR_COLLECTOR_DATA_ERROR:
      return {...state, error: payload};
    default:
      return state;
  }
};
