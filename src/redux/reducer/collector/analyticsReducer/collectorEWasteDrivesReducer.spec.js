/* eslint-disable no-undef */
import * as types from "../../../config/actionType";
import {collectorEWasteDrivesReducer} from "./collectorEWasteDrivesReducer";

describe("collectorEWasteDrives", () => {
  it("should return the initial state", () => {
    const initialState1 = {
      data: {},
      isLoading: false,
      error: "",
    };
    const newState = collectorEWasteDrivesReducer(undefined, {});
    expect(newState).toEqual(initialState1);
  });
  const initialState = {
    data: {},
    isLoading: true,
    error: "",
  };
  it("should handle COLLECTOR_EWASTE_DRIVES_REQUEST", () => {
    expect(
      collectorEWasteDrivesReducer(initialState, {
        type: types.COLLECTOR_EWASTE_DRIVES_REQUEST,
      })
    ).toEqual({
      data: {},
      isLoading: true,
      error: "",
    });
  });
  it("should handle COLLECTOR_EWASTE_DRIVES_SUCCESS", () => {
    expect(
      collectorEWasteDrivesReducer(initialState, {
        type: types.COLLECTOR_EWASTE_DRIVES_SUCCESS,
        payload: {status: "success"},
      })
    ).toEqual({
      data: {status: "success"},
      isLoading: true,
      error: "",
    });
  });
  it("should handle COLLECTOR_EWASTE_DRIVES_ERROR", () => {
    expect(
      collectorEWasteDrivesReducer(initialState, {
        type: types.COLLECTOR_EWASTE_DRIVES_ERROR,
        payload: "ERROR",
      })
    ).toEqual({
      data: {},
      error: {
        payload: "ERROR",
        type: types.COLLECTOR_EWASTE_DRIVES_ERROR,
      },
      isLoading: true,
    });
  });
});
