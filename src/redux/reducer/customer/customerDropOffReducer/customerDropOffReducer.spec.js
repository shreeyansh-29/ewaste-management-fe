/* eslint-disable no-undef */
import * as types from "../../../config/actionType";
import {customerDropOffReducer} from "./customerDropOffReducer";

describe("customerDropOffReducer", () => {
  it("should return the initial state", () => {
    const initialState = {
      data: {},
      isLoading: false,
      error: "",
    };
    const newState = customerDropOffReducer(undefined, {});
    expect(newState).toEqual(initialState);
  });
  const initialState = {
    data: {},
    isLoading: true,
    error: "",
  };
  it("should handle CUSTOMER_DROPOFF_REQUEST ", () => {
    expect(
      customerDropOffReducer(initialState, {
        type: types.CUSTOMER_DROPOFF_REQUEST,
      })
    ).toEqual({
      data: {},
      isLoading: true,
      error: "",
    });
  });
  //   it("should handle CUSTOMER_DROPOFF_SUCCESS", () => {
  //     expect(
  //       customerDropOffReducer(initialState, {
  //         type: types.CUSTOMER_DROPOFF_SUCCESS,
  //         status: "success",
  //       })
  //     ).toEqual({
  //       isLoading: true,
  //       error: "",
  //       status: "success",
  //     });
  //   });
  it("should handle CUSTOMER_DROPOFF_ERROR", () => {
    expect(
      customerDropOffReducer(initialState, {
        type: types.CUSTOMER_DROPOFF_ERROR,
        payload: "ERROR",
      })
    ).toEqual({
      data: {},
      error: {payload: "ERROR", type: types.CUSTOMER_DROPOFF_ERROR},
      isLoading: true,
    });
  });
});
