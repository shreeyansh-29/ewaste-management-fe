/* eslint-disable no-undef */
import * as types from "../../../config/actionType";
import {customerCountCollReducer} from "./customerCountCollReducer";

describe("customerCountCollReducer", () => {
  it("should return the initial state", () => {
    const initialState1 = {
      data: {},
      isLoading: false,
      error: "",
    };
    const newState = customerCountCollReducer(undefined, {});
    expect(newState).toEqual(initialState1);
  });
  const initialState = {
    data: {},
    isLoading: true,
    error: "",
  };
  it("should handle CUSTOMER_COUNT_COLL_REQUEST ", () => {
    expect(
      customerCountCollReducer(initialState, {
        type: types.CUSTOMER_COUNT_COLL_REQUEST,
      })
    ).toEqual({
      data: {},
      isLoading: true,
      error: "",
    });
  });
  it("should handle CUSTOMER_COUNT_COLL_SUCCESS", () => {
    expect(
      customerCountCollReducer(initialState, {
        type: types.CUSTOMER_COUNT_COLL_SUCCESS,
        payload: {status: "success"},
      })
    ).toEqual({
      isLoading: true,
      error: "",
      data: {status: "success"},
    });
  });
  it("should handle CUSTOMER_COUNT_COLL_ERROR", () => {
    expect(
      customerCountCollReducer(initialState, {
        type: types.CUSTOMER_COUNT_COLL_ERROR,
        payload: "ERROR",
      })
    ).toEqual({
      data: {},
      error: {
        payload: "ERROR",
        type: types.CUSTOMER_COUNT_COLL_ERROR,
      },
      isLoading: true,
    });
  });
});
