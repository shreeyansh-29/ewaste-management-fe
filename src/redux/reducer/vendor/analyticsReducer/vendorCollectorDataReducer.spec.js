/* eslint-disable no-undef */
import * as types from "../../../config/actionType";
import {vendorCollectorDataReducer} from "./vendorCollectorDataReducer";

describe("vendorCollectorDataReducer", () => {
  it("should return the initial state", () => {
    const initialState = {
      data: {},
      isLoading: false,
      error: "",
    };
    const newState = vendorCollectorDataReducer(undefined, {});
    expect(newState).toEqual(initialState);
  });
  const initialState = {
    data: {},
    isLoading: true,
    error: "",
  };
  it("should handle VENDOR_COLLECTOR_DATA_REQUEST", () => {
    expect(
      vendorCollectorDataReducer(initialState, {
        type: types.VENDOR_COLLECTOR_DATA_REQUEST,
      })
    ).toEqual({
      data: {},
      isLoading: true,
      error: "",
    });
  });
  it("should handle VENDOR_COLLECTOR_DATA_SUCCESS", () => {
    expect(
      vendorCollectorDataReducer(initialState, {
        type: types.VENDOR_COLLECTOR_DATA_SUCCESS,
        payload: {status: "success"},
      })
    ).toEqual({
      data: {status: "success"},
      isLoading: true,
      error: "",
    });
  });
  it("should handle VENDOR_COLLECTOR_DATA_ERROR", () => {
    expect(
      vendorCollectorDataReducer(initialState, {
        type: types.VENDOR_COLLECTOR_DATA_ERROR,
        payload: "ERROR",
      })
    ).toEqual({
      data: {},
      error: {payload: "ERROR", type: types.VENDOR_COLLECTOR_DATA_ERROR},
      isLoading: true,
    });
  });
});
