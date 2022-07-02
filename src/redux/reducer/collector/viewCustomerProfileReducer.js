/* eslint-disable indent */
import * as types from "../../config/actionType";

const initialState = {
  obj: {},
};
export const viewCustomerProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.COLLECTOR_CUSTOMERPROFILE_REQUEST:
      return {};
    case types.COLLECTOR_CUSTOMERPROFILE_SUCCESS:
      return action.response.data;
    case types.COLLECTOR_CUSTOMERPROFILE_ERROR:
      return action;
    default:
      return state;
  }
};
