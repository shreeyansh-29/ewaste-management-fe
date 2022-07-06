/* eslint-disable no-undef */
import * as types from "../../../config/actionType";
import {customerPendingRequestReducer} from "./customerPendingRequestReducer";

describe("customerPendingRequestReducer", () => {
  it("should return the initial state", () => {
    const initialState1 = {
      data: {},
      isLoading: false,
      error: "",
    };
    const newState = customerPendingRequestReducer(undefined, {});
    expect(newState).toEqual(initialState1);
  });
  const initialState = {
    data: {},
    isLoading: true,
    error: "",
  };
  it("should handle CUSTOMER_PENDING_REQUEST ", () => {
    expect(
      customerPendingRequestReducer(initialState, {
        type: types.CUSTOMER_PENDING_REQUEST,
      })
    ).toEqual({
      data: {},
      isLoading: true,
      error: "",
    });
  });
  it("should handle CUSTOMER_PENDING_SUCCESS", () => {
    expect(
      customerPendingRequestReducer(initialState, {
        type: types.CUSTOMER_PENDING_SUCCESS,
        payload: {status: "success"},
      })
    ).toEqual({
      isLoading: true,
      error: "",
      data: {status: "success"},
    });
  });
  it("should handle CUSTOMER_PENDING_ERROR", () => {
    expect(
      customerPendingRequestReducer(initialState, {
        type: types.CUSTOMER_PENDING_ERROR,
        payload: "ERROR",
      })
    ).toEqual({
      data: {},
      error: {payload: "ERROR", type: types.CUSTOMER_PENDING_ERROR},
      isLoading: true,
    });
  });
});
