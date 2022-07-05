/* eslint-disable no-undef */
import * as types from "../../../config/actionType";
import {customerEWasteReducer} from "./customerEWasteReducer";

describe("customerEWasteReducer", () => {
  it("should return the initial state", () => {
    const initialState = {
      data: {},
      isLoading: false,
      error: "",
    };
    const newState = customerEWasteReducer(undefined, {});
    expect(newState).toEqual(initialState);
  });
  const initialState = {
    data: {},
    isLoading: true,
    error: "",
  };
  it("should handle CUSTOMER_EWASTE_DRIVES_REQUEST ", () => {
    expect(
      customerEWasteReducer(initialState, {
        type: types.CUSTOMER_EWASTE_DRIVES_REQUEST,
      })
    ).toEqual({
      data: {},
      isLoading: true,
      error: "",
    });
  });
  it("should handle CUSTOMER_EWASTE_DRIVES_SUCCESS", () => {
    expect(
      customerEWasteReducer(initialState, {
        type: types.CUSTOMER_EWASTE_DRIVES_SUCCESS,
        payload: {status: "success"},
      })
    ).toEqual({
      isLoading: true,
      error: "",
      data: {status: "success"},
    });
  });
  it("should handle CUSTOMER_EWASTE_DRIVES_ERROR", () => {
    expect(
      customerEWasteReducer(initialState, {
        type: types.CUSTOMER_EWASTE_DRIVES_ERROR,
        payload: "ERROR",
      })
    ).toEqual({
      data: {},
      error: {payload: "ERROR", type: types.CUSTOMER_EWASTE_DRIVES_ERROR},
      isLoading: true,
    });
  });
});
