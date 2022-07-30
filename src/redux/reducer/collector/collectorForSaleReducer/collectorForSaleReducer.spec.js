/* eslint-disable no-undef */
import * as types from "../../../config/actionType";
import {collectorForSaleReducer} from "./collectorForSaleReducer";

describe("collectorForSaleReducer", () => {
  it("should return the initial state", () => {
    const initialState1 = {
      data: {},
      isLoading: false,
      error: "",
    };
    const newState = collectorForSaleReducer(undefined, {});
    expect(newState).toEqual(initialState1);
  });
  const initialState = {
    data: {},
    isLoading: true,
    error: "",
  };
  it("should handle COLLECTOR_FOR_SALE_REQUEST", () => {
    expect(
      collectorForSaleReducer(initialState, {
        type: types.COLLECTOR_FORSALE_REQUEST,
      })
    ).toEqual({
      data: {},
      isLoading: true,
      error: "",
    });
  });
  it("should handle COLLECTOR_FOR_SALE_SUCCESS", () => {
    expect(
      collectorForSaleReducer(initialState, {
        type: types.COLLECTOR_FORSALE_SUCCESS,
        payload: {status: "success"},
      })
    ).toEqual({
      data: {status: "success"},
      isLoading: true,
      error: "",
    });
  });
  it("should handle COLLECTOR_FOR_SALE_ERROR", () => {
    expect(
      collectorForSaleReducer(initialState, {
        type: types.COLLECTOR_FORSALE_ERROR,
        payload: "ERROR",
      })
    ).toEqual({
      data: {},
      error: {
        type: types.COLLECTOR_FORSALE_ERROR,
        payload: "ERROR",
      },

      isLoading: true,
    });
  });
});
