/* eslint-disable indent */
import * as types from "../../config/actionType";

const initialState = {
  data: {},
  isLoading: false,
  error: "",
};
export const viewAcceptColReducer = (state = initialState, action = action) => {
  switch (action.type) {
    case types.VENDOR_COLLECTORPROFILE_ACCEPT_REQUEST:
      return {...state, isLoading: true};
    case types.VENDOR_COLLECTORPROFILE_ACCEPT_SUCCESS:
      console.log(action);
      return {...state, data: action.payload};
    case types.VENDOR_COLLECTORPROFILE_ACCEPT_ERROR:
      return {...state, error: action};
    default:
      return state;
  }
};
