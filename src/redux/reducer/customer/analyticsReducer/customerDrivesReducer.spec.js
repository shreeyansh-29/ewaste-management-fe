/* eslint-disable no-undef */
import * as types from "../../../config/actionType";
import {customerDrivesReducer} from "./customerDrivesReducer";

describe("customerDrivesReducer", () => {
  it("should return the initial state", () => {
    const initialState1 = {
      data: {},
      isLoading: false,
      error: "",
    };
    const newState = customerDrivesReducer(undefined, {});
    expect(newState).toEqual(initialState1);
  });
  const initialState = {
    data: {},
    isLoading: true,
    error: "",
  };
  it("should handle CUSTOMER_DRIVES_REQUEST ", () => {
    expect(
      customerDrivesReducer(initialState, {
        type: types.CUSTOMER_DRIVES_REQUEST,
      })
    ).toEqual({
      data: {},
      isLoading: true,
      error: "",
    });
  });
  it("should handle CUSTOMER_DRIVES_SUCCESS", () => {
    expect(
      customerDrivesReducer(initialState, {
        type: types.CUSTOMER_DRIVES_SUCCESS,
        payload: {status: "success"},
      })
    ).toEqual({
      data: {status: "success"},
      isLoading: true,
      error: "",
    });
  });
  it("should handle CUSTOMER_DRIVES_ERROR", () => {
    expect(
      customerDrivesReducer(initialState, {
        type: types.CUSTOMER_DRIVES_ERROR,
        payload: "ERROR",
      })
    ).toEqual({
      data: {},
      error: {
        payload: "ERROR",
        type: types.CUSTOMER_DRIVES_ERROR,
      },
      isLoading: true,
    });
  });
});
