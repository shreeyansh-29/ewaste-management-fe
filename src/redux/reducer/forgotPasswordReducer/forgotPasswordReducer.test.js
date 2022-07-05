/* eslint-disable no-undef */
import * as types from "../../config/actionType";
import {forgotPasswordReducer} from "./forgotPasswordReducer";

describe("forgotPasswordReducer", () => {
  it("should return the initial state", () => {
    const initialState = {
      data: {},
      isLoading: false,
      error: "",
    };
    const newState = forgotPasswordReducer(undefined, {});
    expect(newState).toEqual(initialState);
  });
  const initialState = {
    data: {},
    isLoading: true,
    error: "",
  };
  it("should handle FORGOT_PASSWORD_REQUEST ", () => {
    expect(
      forgotPasswordReducer(initialState, {
        type: types.FORGOT_PASSWORD_REQUEST,
      })
    ).toEqual({
      data: {},
      isLoading: true,
      error: "",
    });
  });
  it("should handle FORGOT_PASSWORD_SUCCESS", () => {
    expect(
      forgotPasswordReducer(initialState, {
        type: types.FORGOT_PASSWORD_SUCCESS,
        payload: {status: "success"},
      })
    ).toEqual({
      data: {status: "success"},
      isLoading: true,
      error: "",
    });
  });
  it("should handle FORGOT_PASSWORD_ERROR", () => {
    expect(
      forgotPasswordReducer(initialState, {
        type: types.FORGOT_PASSWORD_ERROR,
        payload: "ERROR",
      })
    ).toEqual({
      data: {},
      error: {payload: "ERROR", type: types.FORGOT_PASSWORD_ERROR},
      isLoading: true,
    });
  });
});
