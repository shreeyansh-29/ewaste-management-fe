/* eslint-disable no-undef */
import * as types from "../../config/actionType";
import {viewAcceptColReducer} from "./viewAcceptColReducer";

describe("viewAcceptColReducer", () => {
  it("should return the initial state", () => {
    const initialState1 = {
      data: {},
      isLoading: false,
      error: "",
    };
    const newState = viewAcceptColReducer(undefined, {});
    expect(newState).toEqual(initialState1);
  });
  const initialState = {
    data: {},
    isLoading: true,
    error: "",
  };
  it("should handle VENDOR_COLLECTORPROFILE_ACCEPT_REQUEST", () => {
    expect(
      viewAcceptColReducer(initialState, {
        type: types.VENDOR_COLLECTORPROFILE_ACCEPT_REQUEST,
      })
    ).toEqual({
      data: {},
      isLoading: true,
      error: "",
    });
  });
  it("should handle VENDOR_COLLECTORPROFILE_ACCEPT_SUCCESS", () => {
    expect(
      viewAcceptColReducer(initialState, {
        type: types.VENDOR_COLLECTORPROFILE_ACCEPT_SUCCESS,
        payload: {status: "success"},
      })
    ).toEqual({
      data: {status: "success"},
      isLoading: true,
      error: "",
    });
  });
  it("should handle VENDOR_COLLECTORPROFILE_ACCEPT_ERROR", () => {
    expect(
      viewAcceptColReducer(initialState, {
        type: types.VENDOR_COLLECTORPROFILE_ACCEPT_ERROR,
        payload: "ERROR",
      })
    ).toEqual({
      data: {},
      error: {
        payload: "ERROR",
        type: types.VENDOR_COLLECTORPROFILE_ACCEPT_ERROR,
      },
      isLoading: true,
    });
  });
});
