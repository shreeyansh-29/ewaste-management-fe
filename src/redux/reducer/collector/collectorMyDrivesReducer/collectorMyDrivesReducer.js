/* eslint-disable indent */
import * as types from "../../../config/actionType";

const initialState = {
  data: {},
  isLoading: false,
  error: "",
};

export const collectorMyDrivesReducer = (
  state = initialState,
  action = action
) => {
  switch (action.type) {
    case types.COLLECTOR_MYDRIVES_REQUEST:
      return {...state, isLoading: true};
    case types.COLLECTOR_MYDRIVES_SUCCESS:
      return {...state, data: action.payload};
    case types.COLLECTOR_MYDRIVES_ERROR:
      return {...state, error: action};
    default:
      return state;
  }
};
