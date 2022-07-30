/* eslint-disable no-undef */
import * as types from "../../config/actionType";
import {signUpReducer} from "./signUpReducer";

describe("signUpReducer", () => {
  it("should return the initial state", () => {
    const initialState1 = {
      data: {},
      isLoading: false,
      error: "",
    };
    const newState = signUpReducer(undefined, {});
    expect(newState).toEqual(initialState1);
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
      data: {status: "success"},
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
      error: {
        payload: "ERROR",
        type: types.SIGN_UP_ERROR,
      },
      isLoading: true,
    });
  });
});
