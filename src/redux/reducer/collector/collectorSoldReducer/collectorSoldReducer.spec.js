/* eslint-disable no-undef */
import * as types from "../../../config/actionType";
import {collectorSoldReducer} from "./collectorSoldReducer";

describe("collectorSoldReducer", () => {
  it("should return the initial state", () => {
    const initialState = {
      data: {},
      isLoading: false,
      error: "",
    };
    const newState = collectorSoldReducer(undefined, {});
    expect(newState).toEqual(initialState);
  });
  const initialState = {
    data: {},
    isLoading: true,
    error: "",
  };
  it("should handle COLLECTOR_SOLD_REQUEST", () => {
    expect(
      collectorSoldReducer(initialState, {
        type: types.COLLECTOR_SOLD_REQUEST,
      })
    ).toEqual({
      data: {},
      isLoading: true,
      error: "",
    });
  });
  it("should handle COLLECTOR_SOLD_SUCCESS", () => {
    expect(
      collectorSoldReducer(initialState, {
        type: types.COLLECTOR_SOLD_SUCCESS,
        payload: {status: "success"},
      })
    ).toEqual({
      data: {status: "success"},
      isLoading: true,
      error: "",
    });
  });
  it("should handle COLLECTOR_SOLD_ERROR", () => {
    expect(
      collectorSoldReducer(initialState, {
        type: types.COLLECTOR_SOLD_ERROR,
        payload: "ERROR",
      })
    ).toEqual({
      data: {},
      error: {
        payload: "ERROR",
        type: types.COLLECTOR_SOLD_ERROR,
      },
      isLoading: true,
    });
  });
});
