/* eslint-disable indent */
import * as types from "../../../config/actionType";

const initialState = {
  data: {},
  isLoading: false,
  error: "",
};
export const collectorOrganizeDriveReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.COLLECTOR_ORGANIZE_REQUEST:
      return {...state, isLoading: true};
    case types.COLLECTOR_ORGANIZE_SUCCESS:
      return {...state, data: action.payload};
    case types.COLLECTOR_ORGANIZE_ERROR:
      return {...state, error: action};
    default:
      return state;
  }
};
