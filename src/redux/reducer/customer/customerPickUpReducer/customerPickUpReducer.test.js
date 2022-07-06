/* eslint-disable no-undef */
import * as types from "../../../config/actionType";
import {customerPickUpReducer} from "./customerPickUpReducer";

describe("customerPickUpReducer", () => {
  it("should return the initial state", () => {
    const initialState1 = {
      data: {},
      isLoading: false,
      error: "",
    };
    const newState = customerPickUpReducer(undefined, {});
    expect(newState).toEqual(initialState1);
  });
  const initialState = {
    data: {},
    isLoading: true,
    error: "",
  };
  it("should handle CUSTOMER_PICKUP_REQUEST ", () => {
    expect(
      customerPickUpReducer(initialState, {
        type: types.CUSTOMER_PICKUP_REQUEST,
      })
    ).toEqual({
      data: {},
      isLoading: true,
      error: "",
    });
  });
  it("should handle CUSTOMER_PICKUP_SUCCESS", () => {
    expect(
      customerPickUpReducer(initialState, {
        type: types.CUSTOMER_PICKUP_SUCCESS,
        payload: {status: "success"},
      })
    ).toEqual({
      isLoading: true,
      error: "",
      data: {status: "success"},
    });
  });
  it("should handle CUSTOMER_PICKUP_ERROR", () => {
    expect(
      customerPickUpReducer(initialState, {
        type: types.CUSTOMER_PICKUP_ERROR,
        payload: "ERROR",
      })
    ).toEqual({
      data: {},
      error: {payload: "ERROR", type: types.CUSTOMER_PICKUP_ERROR},
      isLoading: true,
    });
  });
});
