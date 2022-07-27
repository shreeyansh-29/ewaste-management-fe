/* eslint-disable indent */
import * as types from "../../../config/actionType";

const initialState = {
  data: {},
  isLoading: false,
  error: "",
};

export const collectorMyDrivesStatusReducer = (
  state = initialState,
  {type, payload}
) => {
  switch (type) {
    case types.COLLECTOR_MYDRIVES_STATUS_REQUEST:
      return {...state, isLoading: true};
    case types.COLLECTOR_MYDRIVES_STATUS_SUCCESS:
      return {...state, data: payload};
    case types.COLLECTOR_MYDRIVES_STATUS_ERROR:
      return {...state, error: payload};
    default:
      return state;
  }
};
