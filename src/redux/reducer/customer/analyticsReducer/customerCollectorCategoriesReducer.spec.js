/* eslint-disable no-undef */
import * as types from "../../../config/actionType";
import {customerCollectorCategoriesReducer} from "./customerCollectorCategoriesReducer";

describe("customerCollectorCategoriesReducer", () => {
  it("should return the initial state", () => {
    const initialState1 = {
      data: {},
      isLoading: false,
      error: "",
    };
    const newState = customerCollectorCategoriesReducer(undefined, {});
    expect(newState).toEqual(initialState1);
  });
  const initialState = {
    data: {},
    isLoading: true,
    error: "",
  };
  it("should handle CUSTOMER_COLLECTORCATEGORIES_REQUEST ", () => {
    expect(
      customerCollectorCategoriesReducer(initialState, {
        type: types.CUSTOMER_COLLECTORCATEGORIES_REQUEST,
      })
    ).toEqual({
      data: {},
      isLoading: true,
      error: "",
    });
  });
  it("should handle CUSTOMER_COLLECTORCATEGORIES_SUCCESS", () => {
    expect(
      customerCollectorCategoriesReducer(initialState, {
        type: types.CUSTOMER_COLLECTORCATEGORIES_SUCCESS,
        payload: {status: "success"},
      })
    ).toEqual({
      data: {status: "success"},
      isLoading: true,
      error: "",
    });
  });
  it("should handle CUSTOMER_COLLECTORCATEGORIES_ERROR", () => {
    expect(
      customerCollectorCategoriesReducer(initialState, {
        type: types.CUSTOMER_COLLECTORCATEGORIES_ERROR,
        payload: "ERROR",
      })
    ).toEqual({
      data: {},
      error: {
        payload: "ERROR",
        type: types.CUSTOMER_COLLECTORCATEGORIES_ERROR,
      },
      isLoading: true,
    });
  });
});
