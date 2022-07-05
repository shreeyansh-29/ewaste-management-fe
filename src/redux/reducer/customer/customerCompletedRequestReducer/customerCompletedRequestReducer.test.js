/* eslint-disable no-undef */
import * as types from "../../../config/actionType";
import {customerCompletedRequestReducer} from "./customerCompletedRequestReducer";

describe("customerCompletedRequestReducer", () => {
  it("should return the initial state", () => {
    const initialState = {
      data: {},
      isLoading: false,
      error: "",
    };
    const newState = customerCompletedRequestReducer(undefined, {});
    expect(newState).toEqual(initialState);
  });
  const initialState = {
    data: {},
    isLoading: true,
    error: "",
  };
  it("should handle CUSTOMER_COMPLETED_REQUEST ", () => {
    expect(
      customerCompletedRequestReducer(initialState, {
        type: types.CUSTOMER_COMPLETED_REQUEST,
      })
    ).toEqual({
      data: {},
      isLoading: true,
      error: "",
    });
  });
  it("should handle CUSTOMER_COMPLETED_SUCCESS", () => {
    expect(
      customerCompletedRequestReducer(initialState, {
        type: types.CUSTOMER_COMPLETED_SUCCESS,
        payload: {status: "success"},
      })
    ).toEqual({
      data: {status: "success"},
      isLoading: true,
      error: "",
    });
  });
  it("should handle CUSTOMER_COMPLETED_ERROR", () => {
    expect(
      customerCompletedRequestReducer(initialState, {
        type: types.CUSTOMER_COMPLETED_ERROR,
        payload: "ERROR",
      })
    ).toEqual({
      data: {},
      error: {payload: "ERROR", type: types.CUSTOMER_COMPLETED_ERROR},
      isLoading: true,
    });
  });
});
