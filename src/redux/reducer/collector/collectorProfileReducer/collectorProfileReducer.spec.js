/* eslint-disable no-undef */
import * as types from "../../../config/actionType";
import {collectorProfileReducer} from "./collectorProfileReducer";

describe("collectorProfileReducer", () => {
  it("should return the initial state", () => {
    const initialState1 = {
      data: {},
      isLoading: false,
      error: "",
    };
    const newState = collectorProfileReducer(undefined, {});
    expect(newState).toEqual(initialState1);
  });
  const initialState = {
    data: {},
    isLoading: true,
    error: "",
  };
  it("should handle COLLECTOR_PROFILE_REQUEST", () => {
    expect(
      collectorProfileReducer(initialState, {
        type: types.COLLECTOR_PROFILE_REQUEST,
      })
    ).toEqual({
      data: {},
      isLoading: true,
      error: "",
    });
  });
  it("should handle COLLECTOR_PROFILE_SUCCESS", () => {
    expect(
      collectorProfileReducer(initialState, {
        type: types.COLLECTOR_PROFILE_SUCCESS,
        payload: {status: "success"},
      })
    ).toEqual({
      data: {status: "success"},
      isLoading: true,
      error: "",
    });
  });
  it("should handle COLLECTOR_PROFILE_ERROR", () => {
    expect(
      collectorProfileReducer(initialState, {
        type: types.COLLECTOR_PROFILE_ERROR,
        payload: "ERROR",
      })
    ).toEqual({
      data: {},
      error: {
        payload: "ERROR",
        type: types.COLLECTOR_PROFILE_ERROR,
      },
      isLoading: true,
    });
  });
});
