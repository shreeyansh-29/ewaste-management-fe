/* eslint-disable no-undef */
import * as types from "../../../config/actionType";
import {vendorCatgItemsReducer} from "./vendorCatgItemsReducer";

describe("vendorCatgItemsReducer", () => {
  it("should return the initial state", () => {
    const initialState1 = {
      data: {},
      isLoading: false,
      error: "",
    };
    const newState = vendorCatgItemsReducer(undefined, {});
    expect(newState).toEqual(initialState1);
  });
  const initialState = {
    data: {},
    isLoading: true,
    error: "",
  };
  it("should handle VENDOR_CATGITEMS_REQUEST", () => {
    expect(
      vendorCatgItemsReducer(initialState, {
        type: types.VENDOR_CATGITEMS_REQUEST,
      })
    ).toEqual({
      data: {},
      isLoading: true,
      error: "",
    });
  });
  it("should handle VENDOR_CATGITEMS_SUCCESS", () => {
    expect(
      vendorCatgItemsReducer(initialState, {
        type: types.VENDOR_CATGITEMS_SUCCESS,
        payload: {status: "success"},
      })
    ).toEqual({
      data: {status: "success"},
      isLoading: true,
      error: "",
    });
  });
  it("should handle VENDOR_CATGITEMS_ERROR", () => {
    expect(
      vendorCatgItemsReducer(initialState, {
        type: types.VENDOR_CATGITEMS_ERROR,
        payload: "ERROR",
      })
    ).toEqual({
      data: {},
      error: {
        payload: "ERROR",
        type: types.VENDOR_CATGITEMS_ERROR,
      },
      isLoading: true,
    });
  });
});
