/* eslint-disable no-undef */
import * as types from "../../../config/actionType";
import {vendorProfileReducer} from "./vendorProfileReducer";

describe("vendorProfileReducer", () => {
  it("should return the initial state", () => {
    const initialState1 = {
      data: {},
      isLoading: false,
      error: "",
    };
    const newState = vendorProfileReducer(undefined, {});
    expect(newState).toEqual(initialState1);
  });
  const initialState = {
    data: {},
    isLoading: true,
    error: "",
  };
  it("should handle VENDOR_PROFILE_REQUEST ", () => {
    expect(
      vendorProfileReducer(initialState, {
        type: types.VENDOR_PROFILE_REQUEST,
      })
    ).toEqual({
      data: {},
      isLoading: true,
      error: "",
    });
  });
  it("should handle VENDOR_PROFILE_SUCCESS", () => {
    expect(
      vendorProfileReducer(initialState, {
        type: types.VENDOR_PROFILE_SUCCESS,
        payload: {status: "success"},
      })
    ).toEqual({
      data: {status: "success"},
      isLoading: true,
      error: "",
    });
  });
  it("should handle VENDOR_PROFILE_ERROR", () => {
    expect(
      vendorProfileReducer(initialState, {
        type: types.VENDOR_PROFILE_ERROR,
        payload: "ERROR",
      })
    ).toEqual({
      data: {},
      error: {
        payload: "ERROR",
        type: types.VENDOR_PROFILE_ERROR,
      },
      isLoading: true,
    });
  });
});
