/* eslint-disable no-undef */
import * as types from "../../../config/actionType";
import {customerPendingDeclineReducer} from "./customerPendingDeclineReducer";

describe("customerEWasteReducer", () => {
  it("should return the initial state", () => {
    const initialState1 = {
      data: {},
      isLoading: false,
      error: "",
    };
    const newState = customerPendingDeclineReducer(undefined, {});
    expect(newState).toEqual(initialState1);
  });
  const initialState = {
    data: {},
    isLoading: true,
    error: "",
  };
  it("should handle CUSTOMER_PENDING_DECLINE_REQUEST ", () => {
    expect(
      customerPendingDeclineReducer(initialState, {
        type: types.CUSTOMER_PENDING_DECLINE_REQUEST,
      })
    ).toEqual({
      data: {},
      isLoading: true,
      error: "",
    });
  });
  it("should handle CUSTOMER_PENDING_DECLINE_SUCCESS", () => {
    expect(
      customerPendingDeclineReducer(initialState, {
        type: types.CUSTOMER_PENDING_DECLINE_SUCCESS,
        payload: {status: "success"},
      })
    ).toEqual({
      isLoading: true,
      error: "",
      data: {status: "success"},
    });
  });
  it("should handle CUSTOMER_PENDING_DECLINE_ERROR", () => {
    expect(
      customerPendingDeclineReducer(initialState, {
        type: types.CUSTOMER_PENDING_DECLINE_ERROR,
        payload: "ERROR",
      })
    ).toEqual({
      data: {},
      error: {payload: "ERROR", type: types.CUSTOMER_PENDING_DECLINE_ERROR},
      isLoading: true,
    });
  });
});
