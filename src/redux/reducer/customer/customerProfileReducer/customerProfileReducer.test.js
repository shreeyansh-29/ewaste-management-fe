/* eslint-disable no-undef */
import * as types from "../../../config/actionType";
import {customerProfileReducer} from "./customerProfileReducer";

describe("customerProfileReducer", () => {
  it("should return the initial state", () => {
    const initialState1 = {
      data: {},
      isLoading: false,
      error: "",
    };
    const newState = customerProfileReducer(undefined, {});
    expect(newState).toEqual(initialState1);
  });
  const initialState = {
    data: {},
    isLoading: true,
    error: "",
  };
  it("should handle CUSTOMER_PROFILE_REQUEST ", () => {
    expect(
      customerProfileReducer(initialState, {
        type: types.CUSTOMER_PROFILE_REQUEST,
      })
    ).toEqual({
      data: {},
      isLoading: true,
      error: "",
    });
  });
  it("should handle CUSTOMER_PROFILE_SUCCESS", () => {
    expect(
      customerProfileReducer(initialState, {
        type: types.CUSTOMER_PROFILE_SUCCESS,
        payload: {status: "success"},
      })
    ).toEqual({
      isLoading: true,
      error: "",
      data: {status: "success"},
    });
  });
  it("should handle CUSTOMER_PROFILE_ERROR", () => {
    expect(
      customerProfileReducer(initialState, {
        type: types.CUSTOMER_PROFILE_ERROR,
        payload: "ERROR",
      })
    ).toEqual({
      data: {},
      error: {
        payload: "ERROR",
        type: types.CUSTOMER_PROFILE_ERROR,
      },
      isLoading: true,
    });
  });
});
