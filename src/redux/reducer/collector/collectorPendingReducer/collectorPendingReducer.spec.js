/* eslint-disable no-undef */
import * as types from "../../../config/actionType";
import {collectorPendingReducer} from "./collectorPendingReducer";

describe("collectorPendingReducer", () => {
  it("should return the initial state", () => {
    const initialState1 = {
      data: {},
      isLoading: false,
      error: "",
    };
    const newState = collectorPendingReducer(undefined, {});
    expect(newState).toEqual(initialState1);
  });
  const initialState = {
    data: {},
    isLoading: true,
    error: "",
  };
  it("should handle COLLECTOR_PENDING_REQUEST", () => {
    expect(
      collectorPendingReducer(initialState, {
        type: types.COLLECTOR_PENDING_REQUEST,
      })
    ).toEqual({
      data: {},
      isLoading: true,
      error: "",
    });
  });
  it("should handle COLLECTOR_PENDING_SUCCESS", () => {
    expect(
      collectorPendingReducer(initialState, {
        type: types.COLLECTOR_PENDING_SUCCESS,
        payload: {status: "success"},
      })
    ).toEqual({
      data: {status: "success"},
      isLoading: true,
      error: "",
    });
  });
  it("should handle COLLECTOR_PENDING_ERROR", () => {
    expect(
      collectorPendingReducer(initialState, {
        type: types.COLLECTOR_PENDING_ERROR,
        payload: "ERROR",
      })
    ).toEqual({
      data: {},
      error: {
        payload: "ERROR",
        type: types.COLLECTOR_PENDING_ERROR,
      },
      isLoading: true,
    });
  });
});
