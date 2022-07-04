/* eslint-disable indent */
import * as types from "../../config/actionType";

const initialState = {
  obj: {},
};
export const viewCollectorProfileReducer = (
  state = initialState,
  action = action
) => {
  switch (action.type) {
    case types.CUSTOMER_COLLECTORPROFILE_REQUEST:
      return {};
    case types.CUSTOMER_COLLECTORPROFILE_SUCCESS:
      return action.response;
    case types.CUSTOMER_COLLECTORPROFILE_ERROR:
      return action;
    default:
      return state;
  }
};
