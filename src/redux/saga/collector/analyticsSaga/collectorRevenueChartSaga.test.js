/* eslint-disable no-undef */
import {takeLatest} from "redux-saga/effects";
import {runSaga} from "redux-saga";
import {
  collectorRevenueChartError,
  collectorRevenueChartSuccess,
} from "../../../action/collector/analyticsAction/collectorRevenueChartAction";
import * as api from "../../../../services/collector/analyticsService/collectorRevenueChartService";
import {
  collectorRevenueChartSaga,
  watchCollectorRevenueChart,
} from "./collectorRevenueChartSaga";

describe("watchCollectorRevenueChart", () => {
  const genObject = watchCollectorRevenueChart();
  it("should wait", () => {
    expect(genObject.next().value).toEqual(
      takeLatest("COLLECTOR_REVENUE_CHART_REQUEST", collectorRevenueChartSaga)
    );
  });
  it("should be done on next iteration", () => {
    expect(genObject.next().done).toBeTruthy();
  });
});

describe("test collectorRevenueChartSaga", () => {
  it("success triggers success action", () => {
    const generator = jest
      .spyOn(api, "collectorRevenueChartService")
      .mockImplementation(() => Promise.resolve());
    const dispatched = {
      payload: undefined,
      type: "COLLECTOR_REVENUE_CHART_SUCCESS",
    };
    const result = runSaga(
      {
        dispatch: (action) => Object.assign(dispatched, action),
      },
      collectorRevenueChartSaga
    );

    expect(result).toBeTruthy();
    expect(generator).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual(collectorRevenueChartSuccess());
    generator.mockClear();
  });
  it("failure triggers error action", () => {
    const generator = jest
      .spyOn(api, "collectorRevenueChartService")
      .mockImplementation(() => Promise.reject());
    const dispatched = {
      payload: undefined,
      type: "COLLECTOR_REVENUE_CHART_ERROR",
    };
    const result = runSaga(
      {
        dispatch: (action) => Object.assign(dispatched, action),
      },
      collectorRevenueChartSaga
    );
    expect(result).toBeTruthy();
    expect(generator).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual(collectorRevenueChartError());
    generator.mockClear();
  });
});
