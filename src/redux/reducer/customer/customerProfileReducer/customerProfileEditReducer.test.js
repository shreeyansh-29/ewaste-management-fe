/* eslint-disable no-undef */
import * as types from "../../../config/actionType";
import {customerProfileEditReducer} from "./customerProfileEditReducer";

describe("customerProfileEditReducer", () => {
  it("should return the initial state", () => {
    const initialState = {
      data: {},
      isLoading: false,
      error: "",
    };
    const newState = customerProfileEditReducer(undefined, {});
    expect(newState).toEqual(initialState);
  });
  const initialState = {
    data: {},
    isLoading: true,
    error: "",
  };
  it("should handle CUSTOMER_PROFILE_EDIT_REQUEST ", () => {
    expect(
      customerProfileEditReducer(initialState, {
        type: types.CUSTOMER_PROFILE_EDIT_REQUEST,
      })
    ).toEqual({
      data: {},
      isLoading: true,
      error: "",
    });
  });
  it("should handle CUSTOMER_PROFILE_EDIT_SUCCESS", () => {
    expect(
      customerProfileEditReducer(initialState, {
        type: types.CUSTOMER_PROFILE_EDIT_SUCCESS,
        payload: {status: "success"},
      })
    ).toEqual({
      isLoading: true,
      error: "",
      data: {status: "success"},
    });
  });
  it("should handle CUSTOMER_PROFILE_EDIT_ERROR", () => {
    expect(
      customerProfileEditReducer(initialState, {
        type: types.CUSTOMER_PROFILE_EDIT_ERROR,
        payload: "ERROR",
      })
    ).toEqual({
      data: {},
      error: {payload: "ERROR", type: types.CUSTOMER_PROFILE_EDIT_ERROR},
      isLoading: true,
    });
  });
});
