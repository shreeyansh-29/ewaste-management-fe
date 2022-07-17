/* eslint-disable no-undef */
import * as types from "../../../config/actionType";
import {vendorNameReducer} from "./vendorNameReducer";

describe("vendorNameReducer", () => {
  it("should return the initial state", () => {
    const initialState1 = {
      data: {},
      isLoading: false,
      error: "",
    };
    const newState = vendorNameReducer(undefined, {});
    expect(newState).toEqual(initialState1);
  });
  const initialState = {
    data: {},
    isLoading: true,
    error: "",
  };
  it("should handle VENDOR_NAME_REQUEST ", () => {
    expect(
      vendorNameReducer(initialState, {
        type: types.VENDOR_NAME_REQUEST,
      })
    ).toEqual({
      data: {},
      isLoading: true,
      error: "",
    });
  });
  it("should handle VENDOR_NAME_SUCCESS", () => {
    expect(
      vendorNameReducer(initialState, {
        type: types.VENDOR_NAME_SUCCESS,
        payload: {firstName: "John"},
      })
    ).toEqual({
      data: {firstName: "John"},
      isLoading: true,
      error: "",
    });
  });
  it("should handle VENDOR_NAME_ERROR", () => {
    expect(
      vendorNameReducer(initialState, {
        type: types.VENDOR_NAME_ERROR,
        payload: "ERROR",
      })
    ).toEqual({
      data: {},
      error: {payload: "ERROR", type: types.VENDOR_NAME_ERROR},
      isLoading: true,
    });
  });
});
