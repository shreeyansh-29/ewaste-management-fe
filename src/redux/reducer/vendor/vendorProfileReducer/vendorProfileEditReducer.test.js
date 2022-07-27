/* eslint-disable no-undef */
import * as types from "../../../config/actionType";
import {vendorProfileEditReducer} from "./vendorProfileEditReducer";

describe("vendorProfileEditReducer", () => {
  it("should return the initial state", () => {
    const initialState1 = {
      data: {},
      isLoading: false,
      error: "",
    };
    const newState = vendorProfileEditReducer(undefined, {});
    expect(newState).toEqual(initialState1);
  });
  const initialState = {
    data: {},
    isLoading: true,
    error: "",
  };
  it("should handle VENDOR_PROFILE_EDIT_REQUEST ", () => {
    expect(
      vendorProfileEditReducer(initialState, {
        type: types.VENDOR_PROFILE_EDIT_REQUEST,
      })
    ).toEqual({
      data: {},
      isLoading: true,
      error: "",
    });
  });
  it("should handle VENDOR_PROFILE_EDIT_SUCCESS", () => {
    expect(
      vendorProfileEditReducer(initialState, {
        type: types.VENDOR_PROFILE_EDIT_SUCCESS,
        payload: {status: "success"},
      })
    ).toEqual({
      data: {status: "success"},
      isLoading: true,
      error: "",
    });
  });
  it("should handle VENDOR_PROFILE_EDIT_ERROR", () => {
    expect(
      vendorProfileEditReducer(initialState, {
        type: types.VENDOR_PROFILE_EDIT_ERROR,
        payload: "ERROR",
      })
    ).toEqual({
      data: {},
      error: "ERROR",
      isLoading: true,
    });
  });
});
