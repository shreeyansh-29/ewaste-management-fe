/* eslint-disable no-undef */
import * as types from "../../../config/actionType";
import {vendorViewItemsReducer} from "./vendorViewItemsReducer";

describe("vendorViewItemsReducer", () => {
  it("should return the initial state", () => {
    const initialState1 = {
      data: {},
      isLoading: false,
      error: "",
    };
    const newState = vendorViewItemsReducer(undefined, {});
    expect(newState).toEqual(initialState1);
  });
  const initialState = {
    data: {},
    isLoading: true,
    error: "",
  };
  it("should handle VENDOR_VIEW_ITEMS_REQUEST ", () => {
    expect(
      vendorViewItemsReducer(initialState, {
        type: types.VENDOR_VIEW_ITEMS_REQUEST,
      })
    ).toEqual({
      data: {},
      isLoading: true,
      error: "",
    });
  });
  it("should handle VENDOR_VIEW_ITEMS_SUCCESS", () => {
    expect(
      vendorViewItemsReducer(initialState, {
        type: types.VENDOR_VIEW_ITEMS_SUCCESS,
        payload: {status: "success"},
      })
    ).toEqual({
      data: {status: "success"},
      isLoading: true,
      error: "",
    });
  });
  it("should handle VENDOR_VIEW_ITEMS_ERROR", () => {
    expect(
      vendorViewItemsReducer(initialState, {
        type: types.VENDOR_VIEW_ITEMS_ERROR,
        payload: "ERROR",
      })
    ).toEqual({
      data: {},
      error: {
        payload: "ERROR",
        type: types.VENDOR_VIEW_ITEMS_ERROR,
      },
      isLoading: true,
    });
  });
});
