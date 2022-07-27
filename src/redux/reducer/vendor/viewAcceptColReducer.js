/* eslint-disable indent */
import * as types from "../../config/actionType";

const initialState = {
  data: {},
  isLoading: false,
  error: "",
};
export const viewAcceptColReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case types.VENDOR_COLLECTORPROFILE_ACCEPT_REQUEST:
      return {...state, isLoading: true};
    case types.VENDOR_COLLECTORPROFILE_ACCEPT_SUCCESS:
      return {...state, data: payload};
    case types.VENDOR_COLLECTORPROFILE_ACCEPT_ERROR:
      return {...state, error: payload};
    default:
      return state;
  }
};
