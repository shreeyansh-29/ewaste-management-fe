/* eslint-disable no-undef */
import * as types from "../../../config/actionType";
import {collectorEWasteItemsReducer} from "./collectorEWasteItemsReducer";

describe("collectorEWasteItems", () => {
  it("should return the initial state", () => {
    const initialState1 = {
      data: {},
      isLoading: false,
      error: "",
    };
    const newState = collectorEWasteItemsReducer(undefined, {});
    expect(newState).toEqual(initialState1);
  });
  const initialState = {
    data: {},
    isLoading: true,
    error: "",
  };
  it("should handle COLLECTOR_EWASTE_ITEMS_REQUEST", () => {
    expect(
      collectorEWasteItemsReducer(initialState, {
        type: types.COLLECTOR_EWASTE_ITEMS_REQUEST,
      })
    ).toEqual({
      data: {},
      isLoading: true,
      error: "",
    });
  });
  it("should handle COLLECTOR_EWASTE_ITEMS_SUCCESS", () => {
    expect(
      collectorEWasteItemsReducer(initialState, {
        type: types.COLLECTOR_EWASTE_ITEMS_SUCCESS,
        payload: {status: "success"},
      })
    ).toEqual({
      data: {status: "success"},
      isLoading: true,
      error: "",
    });
  });
  it("should handle COLLECTOR_EWASTE_ITEMS_ERROR", () => {
    expect(
      collectorEWasteItemsReducer(initialState, {
        type: types.COLLECTOR_EWASTE_ITEMS_ERROR,
        payload: "ERROR",
      })
    ).toEqual({
      data: {},
      error: {payload: "ERROR", type: types.COLLECTOR_EWASTE_ITEMS_ERROR},
      isLoading: true,
    });
  });
});
