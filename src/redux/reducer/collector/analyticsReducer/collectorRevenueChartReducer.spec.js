/* eslint-disable no-undef */
import * as types from "../../../config/actionType";
import {collectorRevenueChartReducer} from "./collectorRevenueChartReducer";
import {COLLECTOR_REVENUE_CHART_ERROR} from "../../../config/actionType";

describe("collectorRevenueChart", () => {
  it("should return the initial state", () => {
    const initialState = {
      data: {},
      isLoading: false,
      error: "",
    };
    const newState = collectorRevenueChartReducer(undefined, {});
    expect(newState).toEqual(initialState);
  });
  const initialState = {
    data: {},
    isLoading: true,
    error: "",
  };
  it("should handle COLLECTOR_REVENUE_CHART_REQUEST", () => {
    expect(
      collectorRevenueChartReducer(initialState, {
        type: types.COLLECTOR_REVENUE_CHART_REQUEST,
      })
    ).toEqual({
      data: {},
      isLoading: true,
      error: "",
    });
  });
  it("should handle COLLECTOR_REVENUE_CHART_SUCCESS", () => {
    expect(
      collectorRevenueChartReducer(initialState, {
        type: types.COLLECTOR_REVENUE_CHART_SUCCESS,
        payload: {status: "success"},
      })
    ).toEqual({
      data: {status: "success"},
      isLoading: true,
      error: "",
    });
  });
  it("should handle COLLECTOR_REVENUE_CHART_ERROR", () => {
    expect(
      collectorRevenueChartReducer(initialState, {
        type: COLLECTOR_REVENUE_CHART_ERROR,
        payload: "NOOOO!!!",
      })
    ).toEqual({
      error: {payload: "NOOOO!!!", type: COLLECTOR_REVENUE_CHART_ERROR},
      data: {},
      isLoading: true,
    });
  });
});
