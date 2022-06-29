/* eslint-disable indent */
import * as types from "../../../redux/config/actionType";

const initialState = {
  obj: {},
};
export const viewCustomerProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.COLLECTOR_CUSTOMERPROFILE_REQUEST:
      return {};
    case types.COLLECTOR_CUSTOMERPROFILE_SUCCESS:
      return action.response;
    case types.COLLECTOR_CUSTOMERPROFILE_ERROR:
      return action;
    default:
      return state;
  }
};
