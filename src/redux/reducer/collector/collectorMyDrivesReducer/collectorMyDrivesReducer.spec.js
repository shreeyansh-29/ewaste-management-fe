/* eslint-disable no-undef */
import * as types from "../../../config/actionType";
import {collectorMyDrivesReducer} from "./collectorMyDrivesReducer";

describe("collectorMyDrivesReducer", () => {
  it("should return the initial state", () => {
    const initialState = {
      data: {},
      isLoading: false,
      error: "",
    };
    const newState = collectorMyDrivesReducer(undefined, {});
    expect(newState).toEqual(initialState);
  });
  const initialState = {
    data: {},
    isLoading: true,
    error: "",
  };
  it("should handle COLLECTOR_MYDRIVES_REQUEST", () => {
    expect(
      collectorMyDrivesReducer(initialState, {
        type: types.COLLECTOR_MYDRIVES_REQUEST,
      })
    ).toEqual({
      data: {},
      isLoading: true,
      error: "",
    });
  });
  it("should handle COLLECTOR_MYDRIVES_SUCCESS", () => {
    expect(
      collectorMyDrivesReducer(initialState, {
        type: types.COLLECTOR_MYDRIVES_SUCCESS,
        payload: {status: "success"},
      })
    ).toEqual({
      data: {status: "success"},
      isLoading: true,
      error: "",
    });
  });
  it("should handle COLLECTOR_MYDRIVES_ERROR", () => {
    expect(
      collectorMyDrivesReducer(initialState, {
        type: types.COLLECTOR_MYDRIVES_ERROR,
        payload: "ERROR",
      })
    ).toEqual({
      data: {},
      error: {
        payload: "ERROR",
        type: types.COLLECTOR_MYDRIVES_ERROR,
      },
      isLoading: true,
    });
  });
});
