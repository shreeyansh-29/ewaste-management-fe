/* eslint-disable indent */
import * as types from "../../../config/actionType";

const initialState = {
  data: {},
  isLoading: false,
  error: "",
};

export const collectorEWasteItemsReducer = (
  state = initialState,
  action = action
) => {
  switch (action.type) {
    case types.COLLECTOR_EWASTE_ITEMS_REQUEST:
      return {...state, isLoading: true};
    case types.COLLECTOR_EWASTE_ITEMS_SUCCESS:
      return {...state, data: action.payload};
    case types.COLLECTOR_EWASTE_ITEMS_ERROR:
      return {...state, error: action};
    default:
      return state;
  }
};
