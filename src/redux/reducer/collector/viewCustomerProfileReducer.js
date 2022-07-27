/* eslint-disable indent */
import * as types from "../../config/actionType";

const initialState = {
  data: {},
  isLoading: false,
  error: "",
};
export const viewCustomerProfileReducer = (
  state = initialState,
  {type, payload}
) => {
  switch (type) {
    case types.COLLECTOR_CUSTOMERPROFILE_REQUEST:
      return {...state, isLoading: true};
    case types.COLLECTOR_CUSTOMERPROFILE_SUCCESS:
      return {...state, data: payload};
    case types.COLLECTOR_CUSTOMERPROFILE_ERROR:
      return {...state, error: payload};
    default:
      return state;
  }
};
