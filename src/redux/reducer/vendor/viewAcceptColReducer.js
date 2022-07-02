/* eslint-disable indent */
import * as types from "../../config/actionType";

const initialState = {
  obj: {},
};
export const viewAcceptColReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.VENDOR_COLLECTORPROFILE_ACCEPT_REQUEST:
      return {};
    case types.VENDOR_COLLECTORPROFILE_ACCEPT_SUCCESS:
      return action.response.data;
    case types.VENDOR_COLLECTORPROFILE_ACCEPT_ERROR:
      return action;
    default:
      return state;
  }
};
