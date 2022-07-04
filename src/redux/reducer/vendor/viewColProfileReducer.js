/* eslint-disable indent */
import * as types from "../../config/actionType";

const initialState = {
  obj: {},
};
export const viewColProfileReducer = (
  state = initialState,
  action = action
) => {
  switch (action.type) {
    case types.VENDOR_COLLECTORPROFILE_REQUEST:
      return {};
    case types.VENDOR_COLLECTORPROFILE_SUCCESS:
      return action.response;
    case types.VENDOR_COLLECTORPROFILE_ERROR:
      return action;
    default:
      return state;
  }
};
