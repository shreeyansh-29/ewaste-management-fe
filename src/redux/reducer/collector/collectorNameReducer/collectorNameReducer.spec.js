/* eslint-disable no-undef */
import * as types from "../../../config/actionType";
import {collectorNameReducer} from "./collectorNameReducer";

describe("collectorMyDrivesReducer", () => {
  it("should return the initial state", () => {
    const initialState1 = {
      data: {},
      isLoading: false,
      error: "",
    };
    const newState = collectorNameReducer(undefined, {});
    expect(newState).toEqual(initialState1);
  });
  const initialState = {
    data: {},
    isLoading: true,
    error: "",
  };
  it("should handle COLLECTOR_NAME_REQUEST", () => {
    expect(
      collectorNameReducer(initialState, {
        type: types.COLLECTOR_NAME_REQUEST,
      })
    ).toEqual({
      data: {},
      isLoading: true,
      error: "",
    });
  });
  it("should handle COLLECTOR_NAME_SUCCESS", () => {
    expect(
      collectorNameReducer(initialState, {
        type: types.COLLECTOR_NAME_SUCCESS,
        payload: {firstName: "Shreeyansh"},
      })
    ).toEqual({
      data: {
        firstName: "Shreeyansh",
      },
      isLoading: true,
      error: "",
    });
  });
  it("should handle COLLECTOR_NAME_ERROR", () => {
    expect(
      collectorNameReducer(initialState, {
        type: types.COLLECTOR_NAME_ERROR,
        payload: "ERROR",
      })
    ).toEqual({
      data: {},
      error: {
        payload: "ERROR",
        type: types.COLLECTOR_NAME_ERROR,
      },
      isLoading: true,
    });
  });
});
