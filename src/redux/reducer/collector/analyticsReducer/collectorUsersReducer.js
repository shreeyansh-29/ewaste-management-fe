/* eslint-disable indent */
import * as types from "../../../config/actionType";

const initialState = {
  data: {},
  isLoading: false,
  error: "",
};

export const collectorUsersReducer = (
  state = initialState,
  {type, payload}
) => {
  switch (type) {
    case types.COLLECTOR_USERS_REQUEST:
      return {...state, isLoading: true};
    case types.COLLECTOR_USERS_SUCCESS:
      return {...state, data: payload};
    case types.COLLECTOR_USERS_ERROR:
      return {...state, error: payload};
    default:
      return state;
  }
};
