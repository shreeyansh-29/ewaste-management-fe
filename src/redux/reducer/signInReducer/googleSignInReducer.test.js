/* eslint-disable no-undef */
import * as types from "../../config/actionType";
import {googleSignInReducer} from "./googleSignInReducer";

describe("googleSignInReducer", () => {
  it("should return the initial state", () => {
    const initialState = {
      data: {},
      isLoading: false,
      error: "",
    };
    const newState = googleSignInReducer(undefined, {});
    expect(newState).toEqual(initialState);
  });
  const initialState = {
    data: {},
    isLoading: true,
    error: "",
  };
  it("should handle GOOGLE_SIGNIN_REQUEST ", () => {
    expect(
      googleSignInReducer(initialState, {
        type: types.GOOGLE_SIGNIN_REQUEST,
      })
    ).toEqual({
      data: {},
      isLoading: true,
      error: "",
    });
  });
  it("should handle GOOGLE_SIGNIN_SUCCESS", () => {
    expect(
      googleSignInReducer(initialState, {
        type: types.GOOGLE_SIGNIN_SUCCESS,
        payload: {status: "success"},
      })
    ).toEqual({
      data: {status: "success"},
      isLoading: true,
      error: "",
    });
  });
  it("should handle GOOGLE_SIGNIN_ERROR", () => {
    expect(
      googleSignInReducer(initialState, {
        type: types.GOOGLE_SIGNIN_ERROR,
        payload: "ERROR",
      })
    ).toEqual({
      data: {},
      error: {payload: "ERROR", type: types.GOOGLE_SIGNIN_ERROR},
      isLoading: true,
    });
  });
});
