/* eslint-disable no-undef */
import * as types from "../../config/actionType";
import {signUpReducer} from "./signUpReducer";

describe("signUpReducer", () => {
  it("should return the initial state", () => {
    const initialState = {
      data: {},
      isLoading: false,
      error: "",
    };
    const newState = signUpReducer(undefined, {});
    expect(newState).toEqual(initialState);
  });
  const initialState = {
    data: {},
    isLoading: true,
    error: "",
  };
  it("should handle SIGN_UP_REQUEST ", () => {
    expect(
      signUpReducer(initialState, {
        type: types.SIGN_UP_REQUEST,
      })
    ).toEqual({
      data: {},
      isLoading: true,
      error: "",
    });
  });
  it("should handle SIGN_UP_SUCCESS", () => {
    expect(
      signUpReducer(initialState, {
        type: types.SIGN_UP_SUCCESS,
        payload: {status: "success"},
      })
    ).toEqual({
      data: {},
      isLoading: true,
      error: "",
    });
  });
  it("should handle SIGN_UP_ERROR", () => {
    expect(
      signUpReducer(initialState, {
        type: types.SIGN_UP_ERROR,
        payload: "ERROR",
      })
    ).toEqual({
      data: {},
      error: "",
      isLoading: true,
    });
  });
});
