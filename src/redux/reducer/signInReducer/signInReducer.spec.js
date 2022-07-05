/* eslint-disable no-undef */
import * as types from "../../config/actionType";
import {signInReducer} from "./signInReducer";

describe("signInReducer", () => {
  it("should return the initial state", () => {
    const initialState = {
      data: {},
      isLoading: false,
      error: "",
    };
    const newState = signInReducer(undefined, {});
    expect(newState).toEqual(initialState);
  });
  const initialState = {
    data: {},
    isLoading: true,
    error: "",
  };
  it("should handle SIGN_IN_REQUEST ", () => {
    expect(
      signInReducer(initialState, {
        type: types.SIGN_IN_REQUEST,
      })
    ).toEqual({
      data: {},
      isLoading: true,
      error: "",
    });
  });
  it("should handle SIGN_IN_SUCCESS", () => {
    expect(
      signInReducer(initialState, {
        type: types.SIGN_IN_SUCCESS,
        payload: {status: "success"},
      })
    ).toEqual({
      data: undefined,
      isLoading: true,
      error: "",
    });
  });
  it("should handle SIGN_IN_ERROR", () => {
    expect(
      signInReducer(initialState, {
        type: types.SIGN_IN_ERROR,
        payload: "ERROR",
      })
    ).toEqual({
      data: {},
      error: {payload: "ERROR", type: types.SIGN_IN_ERROR},
      isLoading: true,
    });
  });
});
