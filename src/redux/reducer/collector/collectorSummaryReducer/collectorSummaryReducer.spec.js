/* eslint-disable no-undef */
import * as types from "../../../config/actionType";
import {collectorSummaryReducer} from "./collectorSummaryReducer";

describe("collectorSummaryReducer", () => {
  it("should return the initial state", () => {
    const initialState1 = {
      data: {},
      isLoading: false,
      error: "",
    };
    const newState = collectorSummaryReducer(undefined, {});
    expect(newState).toEqual(initialState1);
  });
  const initialState = {
    data: {},
    isLoading: true,
    error: "",
  };
  it("should handle COLLECTOR_SUMMARY_REQUEST", () => {
    expect(
      collectorSummaryReducer(initialState, {
        type: types.COLLECTOR_SUMMARY_REQUEST,
      })
    ).toEqual({
      data: {},
      isLoading: true,
      error: "",
    });
  });
  it("should handle COLLECTOR_SUMMARY_SUCCESS", () => {
    expect(
      collectorSummaryReducer(initialState, {
        type: types.COLLECTOR_SUMMARY_SUCCESS,
        payload: {status: "success"},
      })
    ).toEqual({
      data: {status: "success"},
      isLoading: true,
      error: "",
    });
  });
  it("should handle COLLECTOR_SUMMARY_ERROR", () => {
    expect(
      collectorSummaryReducer(initialState, {
        type: types.COLLECTOR_SUMMARY_ERROR,
        payload: "ERROR",
      })
    ).toEqual({
      data: {},
      error: "ERROR",

      isLoading: true,
    });
  });
});
