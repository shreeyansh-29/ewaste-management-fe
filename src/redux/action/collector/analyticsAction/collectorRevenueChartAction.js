import * as types from "../../../config/actionType";

export const collectorRevenueChartRequest = () => {
  return {type: types.COLLECTOR_REVENUE_CHART_REQUEST};
};
export const collectorRevenueChartSuccess = (payload) => {
  return {type: types.COLLECTOR_REVENUE_CHART_SUCCESS, payload};
};
export const collectorRevenueChartError = (payload) => {
  return {type: types.COLLECTOR_REVENUE_CHART_ERROR, payload};
};
