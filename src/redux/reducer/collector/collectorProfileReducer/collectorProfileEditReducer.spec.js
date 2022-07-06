/* eslint-disable no-undef */
import * as types from "../../../config/actionType";
import {collectorProfileEditReducer} from "./collectorProfileEditReducer";

describe("collectorProfileEditReducer", () => {
  it("should return the initial state", () => {
    const initialState1 = {
      data: {},
      isLoading: false,
      error: "",
    };
    const newState = collectorProfileEditReducer(undefined, {});
    expect(newState).toEqual(initialState1);
  });
  const initialState = {
    data: {},
    isLoading: true,
    error: "",
  };
  it("should handle COLLECTOR_PROFILE_EDIT_REQUEST", () => {
    expect(
      collectorProfileEditReducer(initialState, {
        type: types.COLLECTOR_PROFILE_EDIT_REQUEST,
      })
    ).toEqual({
      data: {},
      isLoading: true,
      error: "",
    });
  });
  it("should handle COLLECTOR_PROFILE_EDIT_SUCCESS", () => {
    expect(
      collectorProfileEditReducer(initialState, {
        type: types.COLLECTOR_PROFILE_EDIT_SUCCESS,
        payload: {status: "success"},
      })
    ).toEqual({
      data: {status: "success"},
      isLoading: true,
      error: "",
    });
  });
  it("should handle COLLECTOR_PROFILE_EDIT_ERROR", () => {
    expect(
      collectorProfileEditReducer(initialState, {
        type: types.COLLECTOR_PROFILE_EDIT_ERROR,
        payload: "ERROR",
      })
    ).toEqual({
      data: {},
      error: {
        payload: "ERROR",
        type: types.COLLECTOR_PROFILE_EDIT_ERROR,
      },
      isLoading: true,
    });
  });
});
