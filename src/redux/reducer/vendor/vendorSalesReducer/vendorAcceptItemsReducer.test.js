/* eslint-disable no-undef */
import * as types from "../../../config/actionType";
import {vendorAcceptItemsReducer} from "./vendorAcceptItemsReducer";

describe("vendorAcceptItemsReducer", () => {
  it("should return the initial state", () => {
    const initialState1 = {
      data: {},
      isLoading: false,
      error: "",
    };
    const newState = vendorAcceptItemsReducer(undefined, {});
    expect(newState).toEqual(initialState1);
  });
  const initialState = {
    data: {},
    isLoading: true,
    error: "",
  };
  it("should handle VENDOR_ACCEPT_ITEMS_REQUEST ", () => {
    expect(
      vendorAcceptItemsReducer(initialState, {
        type: types.VENDOR_ACCEPT_ITEMS_REQUEST,
      })
    ).toEqual({
      data: {},
      isLoading: true,
      error: "",
    });
  });
  it("should handle VENDOR_ACCEPT_ITEMS_SUCCESS", () => {
    expect(
      vendorAcceptItemsReducer(initialState, {
        type: types.VENDOR_ACCEPT_ITEMS_SUCCESS,
        payload: {status: "success"},
      })
    ).toEqual({
      data: {status: "success"},
      isLoading: true,
      error: "",
    });
  });
  it("should handle VENDOR_ACCEPT_ITEMS_ERROR", () => {
    expect(
      vendorAcceptItemsReducer(initialState, {
        type: types.VENDOR_ACCEPT_ITEMS_ERROR,
        payload: "ERROR",
      })
    ).toEqual({
      data: {},
      error: {payload: "ERROR", type: types.VENDOR_ACCEPT_ITEMS_ERROR},
      isLoading: true,
    });
  });
});
