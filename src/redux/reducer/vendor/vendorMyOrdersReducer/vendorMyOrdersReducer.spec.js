/* eslint-disable no-undef */
import * as types from "../../../config/actionType";
import {vendorMyOrdersReducer} from "./vendorMyOrdersReducer";

describe("vendorMyOrdersReducer", () => {
  it("should return the initial state", () => {
    const initialState = {
      data: {},
      isLoading: false,
      error: "",
    };
    const newState = vendorMyOrdersReducer(undefined, {});
    expect(newState).toEqual(initialState);
  });
  const initialState = {
    data: {},
    isLoading: true,
    error: "",
  };
  it("should handle VENDOR_MYORDERS_REQUEST", () => {
    expect(
      vendorMyOrdersReducer(initialState, {
        type: types.VENDOR_MYORDERS_REQUEST,
      })
    ).toEqual({
      data: {},
      isLoading: true,
      error: "",
    });
  });
  it("should handle VENDOR_MYORDERS_SUCCESS", () => {
    expect(
      vendorMyOrdersReducer(initialState, {
        type: types.VENDOR_MYORDERS_SUCCESS,
        payload: {status: "success"},
      })
    ).toEqual({
      data: {status: "success"},
      isLoading: true,
      error: "",
    });
  });
  it("should handle VENDOR_MYORDERS_ERROR", () => {
    expect(
      vendorMyOrdersReducer(initialState, {
        type: types.VENDOR_MYORDERS_ERROR,
        payload: "ERROR",
      })
    ).toEqual({
      data: {},
      error: {payload: "ERROR", type: types.VENDOR_MYORDERS_ERROR},
      isLoading: true,
    });
  });
});
