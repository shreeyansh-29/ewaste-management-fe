/* eslint-disable no-undef */
import * as types from "../../../config/actionType";
import {collectorMyDrivesStatusReducer} from "./collectorMyDrivesStatusReducer";

describe("collectorMyDrivesReducer", () => {
  it("should return the initial state", () => {
    const initialState = {
      data: {},
      isLoading: false,
      error: "",
    };
    const newState = collectorMyDrivesStatusReducer(undefined, {});
    expect(newState).toEqual(initialState);
  });
  const initialState = {
    data: {},
    isLoading: true,
    error: "",
  };
  it("should handle COLLECTOR_MYDRIVES_STATUS_REQUEST", () => {
    expect(
      collectorMyDrivesStatusReducer(initialState, {
        type: types.COLLECTOR_MYDRIVES_STATUS_REQUEST,
      })
    ).toEqual({
      data: {},
      isLoading: true,
      error: "",
    });
  });
  it("should handle COLLECTOR_MYDRIVES_STATUS_SUCCESS", () => {
    expect(
      collectorMyDrivesStatusReducer(initialState, {
        type: types.COLLECTOR_MYDRIVES_STATUS_SUCCESS,
        payload: {status: "success"},
      })
    ).toEqual({
      data: {status: "success"},
      isLoading: true,
      error: "",
    });
  });
  it("should handle COLLECTOR_MYDRIVES_STATUS_ERROR", () => {
    expect(
      collectorMyDrivesStatusReducer(initialState, {
        type: types.COLLECTOR_MYDRIVES_STATUS_ERROR,
        payload: "ERROR",
      })
    ).toEqual({
      data: {},
      error: {
        payload: "ERROR",
        type: types.COLLECTOR_MYDRIVES_STATUS_ERROR,
      },
      isLoading: true,
    });
  });
});
