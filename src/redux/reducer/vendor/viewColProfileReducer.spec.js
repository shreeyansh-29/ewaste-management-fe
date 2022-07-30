/* eslint-disable no-undef */
import * as types from "../../config/actionType";
import {viewColProfileReducer} from "./viewColProfileReducer";

describe("viewColProfileReducer", () => {
  it("should return the initial state", () => {
    const initialState1 = {
      data: {},
      isLoading: false,
      error: "",
    };
    const newState = viewColProfileReducer(undefined, {});
    expect(newState).toEqual(initialState1);
  });
  const initialState = {
    data: {},
    isLoading: true,
    error: "",
  };
  it("should handle VENDOR_COLLECTORPROFILE_REQUEST", () => {
    expect.assertions(1);
    expect(
      viewColProfileReducer(initialState, {
        type: types.VENDOR_COLLECTORPROFILE_REQUEST,
      })
    ).toEqual({
      data: {},
      isLoading: true,
      error: "",
    });
  });
  it("should handle VENDOR_COLLECTORPROFILE_SUCCESS", () => {
    expect(
      viewColProfileReducer(initialState, {
        type: types.VENDOR_COLLECTORPROFILE_SUCCESS,
        payload: {status: "success"},
      })
    ).toEqual({
      data: {status: "success"},
      isLoading: true,
      error: "",
    });
  });
  it("should handle VENDOR_COLLECTORPROFILE_ERROR", () => {
    expect(
      viewColProfileReducer(initialState, {
        type: types.VENDOR_COLLECTORPROFILE_ERROR,
        payload: "ERROR",
      })
    ).toEqual({
      data: {},
      error: {
        payload: "ERROR",
        type: types.VENDOR_COLLECTORPROFILE_ERROR,
      },

      isLoading: true,
    });
  });
});
