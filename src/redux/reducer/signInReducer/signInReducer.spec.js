/* eslint-disable no-undef */
import * as types from "../../config/actionType";
import {signInReducer} from "./signInReducer";

describe("signInReducer", () => {
  it("should return the initial state", () => {
    const initialState1 = {
      data: {},
      isLoading: false,
      error: "",
    };
    const newState = signInReducer(undefined, {});
    expect(newState).toEqual(initialState1);
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
      data: {status: "success"},
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
      error: "ERROR",
      isLoading: true,
    });
  });
});
