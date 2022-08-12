/* eslint-disable no-undef */
import * as types from "../../../config/actionType";
import {collectorVendorReducer} from "./collectorVendorReducer";

describe("collectorVendorReducer", () => {
  it("should return the initial state", () => {
    const initialState1 = {
      data: {},
      isLoading: false,
      error: "",
    };
    const newState = collectorVendorReducer(undefined, {});
    expect(newState).toEqual(initialState1);
  });
  const initialState = {
    data: {},
    isLoading: true,
    error: "",
  };
  it("should handle COLLECTOR_VENDOR_REQUEST", () => {
    expect(
      collectorVendorReducer(initialState, {
        type: types.COLLECTOR_VENDOR_REQUEST,
      })
    ).toEqual({
      data: {},
      isLoading: true,
      error: "",
    });
  });
  it("should handle COLLECTOR_VENDOR_SUCCESS", () => {
    expect(
      collectorVendorReducer(initialState, {
        type: types.COLLECTOR_VENDOR_SUCCESS,
        payload: {status: "success"},
      })
    ).toEqual({
      data: {status: "success"},
      isLoading: true,
      error: "",
    });
  });
  it("should handle COLLECTOR_VENDOR_ERROR", () => {
    expect(
      collectorVendorReducer(initialState, {
        type: types.COLLECTOR_VENDOR_ERROR,
        payload: "ERROR",
      })
    ).toEqual({
      data: {},
      error: {
        payload: "ERROR",
        type: types.COLLECTOR_VENDOR_ERROR,
      },
      isLoading: true,
    });
  });
});
