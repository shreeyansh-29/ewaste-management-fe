/* eslint-disable indent */
import * as types from "../../config/actionType";

const initialState = {
  data: {},
  isLoading: false,
  error: "",
};
export const viewCustomerProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.COLLECTOR_CUSTOMERPROFILE_REQUEST:
      return {...state, isLoading: true};
    case types.COLLECTOR_CUSTOMERPROFILE_SUCCESS:
      return {...state, data: action.payload};
    case types.COLLECTOR_CUSTOMERPROFILE_ERROR:
      return {...state, error: action};
    default:
      return state;
  }
};
