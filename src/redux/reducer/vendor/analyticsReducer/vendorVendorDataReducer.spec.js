/* eslint-disable no-undef */
import * as types from "../../../config/actionType";
import {vendorVendorDataReducer} from "./vendorVendorDataReducer";

describe("vendorVendorDataReducer", () => {
  it("should return the initial state", () => {
    const initialState1 = {
      data: {},
      isLoading: false,
      error: "",
    };
    const newState = vendorVendorDataReducer(undefined, {});
    expect(newState).toEqual(initialState1);
  });
  const initialState = {
    data: {},
    isLoading: true,
    error: "",
  };
  it("should handle VENDOR_VENDOR_DATA_REQUEST", () => {
    expect(
      vendorVendorDataReducer(initialState, {
        type: types.VENDOR_VENDOR_DATA_REQUEST,
      })
    ).toEqual({
      data: {},
      isLoading: true,
      error: "",
    });
  });
  it("should handle VENDOR_VENDOR_DATA_SUCCESS", () => {
    expect(
      vendorVendorDataReducer(initialState, {
        type: types.VENDOR_VENDOR_DATA_SUCCESS,
        payload: {status: "success"},
      })
    ).toEqual({
      data: {status: "success"},
      isLoading: true,
      error: "",
    });
  });
  it("should handle VENDOR_VENDOR_DATA_ERROR", () => {
    expect(
      vendorVendorDataReducer(initialState, {
        type: types.VENDOR_VENDOR_DATA_ERROR,
        payload: "ERROR",
      })
    ).toEqual({
      data: {},
      error: {
        type: types.VENDOR_VENDOR_DATA_ERROR,
        payload: "ERROR",
      },
      isLoading: true,
    });
  });
});
