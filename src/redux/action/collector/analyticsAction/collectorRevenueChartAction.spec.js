/* eslint-disable no-undef */
import * as types from "../../../config/actionType";
import * as actions from "../../../action/collector/analyticsAction/collectorRevenueChartAction";

describe("test collectorRevenueChartAction", () => {
  const payload = {status: "success"};
  const error = {status: "fail"};
  it("test collectorRevenueChartRequest function", () => {
    expect(actions.collectorRevenueChartRequest()).toEqual({
      type: types.COLLECTOR_REVENUE_CHART_REQUEST,
    });
  });
  it("test collectorRevenueChartSuccess function", () => {
    expect(actions.collectorRevenueChartSuccess(payload)).toEqual({
      type: types.COLLECTOR_REVENUE_CHART_SUCCESS,
      payload,
    });
  });
  it("test collectorRevenueChartError function", () => {
    expect(actions.collectorRevenueChartError(error)).toEqual({
      type: types.COLLECTOR_REVENUE_CHART_ERROR,
      payload: error,
    });
  });
});
