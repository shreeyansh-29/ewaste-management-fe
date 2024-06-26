/* eslint-disable no-undef */
import * as types from "../../../config/actionType";
import {customerNameReducer} from "./customerNameReducer";

describe("customerNameReducer", () => {
  it("should return the initial state", () => {
    const initialState1 = {
      data: {},
      isLoading: false,
      error: "",
    };
    const newState = customerNameReducer(undefined, {});
    expect(newState).toEqual(initialState1);
  });
  const initialState = {
    data: {},
    isLoading: true,
    error: "",
  };
  it("should handle CUSTOMER_NAME_REQUEST ", () => {
    expect(
      customerNameReducer(initialState, {
        type: types.CUSTOMER_NAME_REQUEST,
      })
    ).toEqual({
      data: {},
      isLoading: true,
      error: "",
    });
  });
  it("should handle CUSTOMER_NAME_SUCCESS", () => {
    expect(
      customerNameReducer(initialState, {
        type: types.CUSTOMER_NAME_SUCCESS,
        payload: {firstName: "John"},
      })
    ).toEqual({
      data: {
        firstName: "John",
      },
      isLoading: true,
      error: "",
    });
  });
  it("should handle CUSTOMER_NAME_ERROR", () => {
    expect(
      customerNameReducer(initialState, {
        type: types.CUSTOMER_NAME_ERROR,
        payload: "ERROR",
      })
    ).toEqual({
      data: {},
      error: {
        payload: "ERROR",
        type: types.CUSTOMER_NAME_ERROR,
      },
      isLoading: true,
    });
  });
});
