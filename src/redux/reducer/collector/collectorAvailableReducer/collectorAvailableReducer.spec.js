/* eslint-disable no-undef */
import * as types from "../../../config/actionType";
import {collectorAvailableReducer} from "./collectorAvailableReducer";

describe("collectorAvailableReducer", () => {
  it("should return the initial state", () => {
    const initialState1 = {
      data: {},
      isLoading: false,
      error: "",
    };
    const newState = collectorAvailableReducer(undefined, {});
    expect(newState).toEqual(initialState1);
  });
  const initialState = {
    data: {},
    isLoading: true,
    error: "",
  };
  it("should handle COLLECTOR_AVAILABLE_REQUEST", () => {
    expect(
      collectorAvailableReducer(initialState, {
        type: types.COLLECTOR_AVAILABLE_REQUEST,
      })
    ).toEqual({
      data: {},
      isLoading: true,
      error: "",
    });
  });
  it("should handle COLLECTOR_AVAILABLE_SUCCESS", () => {
    expect(
      collectorAvailableReducer(initialState, {
        type: types.COLLECTOR_AVAILABLE_SUCCESS,
        payload: {status: "success"},
      })
    ).toEqual({
      data: {status: "success"},
      isLoading: true,
      error: "",
    });
  });
  it("should handle COLLECTOR_AVAILABLE_ERROR", () => {
    expect(
      collectorAvailableReducer(initialState, {
        type: types.COLLECTOR_AVAILABLE_ERROR,
        payload: "ERROR",
      })
    ).toEqual({
      data: {},
      error: {
        payload: "ERROR",
        type: types.COLLECTOR_AVAILABLE_ERROR,
      },
      isLoading: true,
    });
  });
});
