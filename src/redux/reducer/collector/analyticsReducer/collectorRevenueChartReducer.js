/* eslint-disable indent */
import * as types from "../../../config/actionType";

const initialState = {
  data: {},
  isLoading: false,
  error: "",
};

export const collectorRevenueChartReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.COLLECTOR_REVENUE_CHART_REQUEST:
      return {...state, isLoading: true};
    case types.COLLECTOR_REVENUE_CHART_SUCCESS:
      return {...state, data: action.payload};
    case types.COLLECTOR_REVENUE_CHART_ERROR:
      return {...state, error: action};
    default:
      return state;
  }
};
