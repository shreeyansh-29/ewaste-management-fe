/* eslint-disable no-undef */
import * as types from "../../../config/actionType";
import {customerWasteGeneratedReducer} from "./customerWasteGeneratedReducer";

describe("customerWasteGeneratedReducer", () => {
  it("should return the initial state", () => {
    const initialState1 = {
      data: {},
      isLoading: false,
      error: "",
    };
    const newState = customerWasteGeneratedReducer(undefined, {});
    expect(newState).toEqual(initialState1);
  });
  const initialState = {
    data: {},
    isLoading: true,
    error: "",
  };
  it("should handle CUSTOMER_WASTE_GENERATED_REQUEST ", () => {
    expect(
      customerWasteGeneratedReducer(initialState, {
        type: types.CUSTOMER_WASTEGENERATED_REQUEST,
      })
    ).toEqual({
      data: {},
      isLoading: true,
      error: "",
    });
  });
  it("should handle CUSTOMER_WASTE_GENERATED_SUCCESS", () => {
    expect(
      customerWasteGeneratedReducer(initialState, {
        type: types.CUSTOMER_WASTEGENERATED_SUCCESS,
        payload: {status: "success"},
      })
    ).toEqual({
      data: {status: "success"},
      isLoading: true,
      error: "",
    });
  });
  it("should handle CUSTOMER_WASTE_GENERATED_ERROR", () => {
    expect(
      customerWasteGeneratedReducer(initialState, {
        type: types.CUSTOMER_WASTEGENERATED_ERROR,
        payload: "ERROR",
      })
    ).toEqual({
      data: {},
      error: {
        payload: "ERROR",
        type: types.CUSTOMER_WASTEGENERATED_ERROR,
      },
      isLoading: true,
    });
  });
});
