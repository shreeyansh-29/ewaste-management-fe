/* eslint-disable no-undef */
import * as types from "../../../config/actionType";
import {vendorCategoryReducer} from "./vendorCategoryReducer";

describe("vendorCategoryReducer", () => {
  it("should return the initial state", () => {
    const initialState1 = {
      data: {},
      isLoading: false,
      error: "",
    };
    const newState = vendorCategoryReducer(undefined, {});
    expect(newState).toEqual(initialState1);
  });
  const initialState = {
    data: {},
    isLoading: true,
    error: "",
  };
  it("should handle VENDOR_CATEGORY_REQUEST", () => {
    expect(
      vendorCategoryReducer(initialState, {
        type: types.VENDOR_CATEGORY_REQUEST,
      })
    ).toEqual({
      data: {},
      isLoading: true,
      error: "",
    });
  });
  it("should handle VENDOR_CATEGORY_SUCCESS", () => {
    expect(
      vendorCategoryReducer(initialState, {
        type: types.VENDOR_CATEGORY_SUCCESS,
        payload: {status: "success"},
      })
    ).toEqual({
      data: {status: "success"},
      isLoading: true,
      error: "",
    });
  });
  it("should handle VENDOR_CATEGORY_ERROR", () => {
    expect(
      vendorCategoryReducer(initialState, {
        type: types.VENDOR_CATEGORY_ERROR,
        payload: "ERROR",
      })
    ).toEqual({
      data: {},
      error: "ERROR",
      isLoading: true,
    });
  });
});
