/* eslint-disable no-undef */
import * as types from "../../config/actionType";
import {resetPasswordReducer} from "./resetPasswordReducer";

describe("resetPasswordReducer", () => {
  it("should return the initial state", () => {
    const initialState = {
      data: {},
      isLoading: false,
      error: "",
    };
    const newState = resetPasswordReducer(undefined, {});
    expect(newState).toEqual(initialState);
  });
  const initialState = {
    data: {},
    isLoading: true,
    error: "",
  };
  it("should handle RESET_PASSWORD_REQUEST ", () => {
    expect(
      resetPasswordReducer(initialState, {
        type: types.RESET_PASSWORD_REQUEST,
      })
    ).toEqual({
      data: {},
      isLoading: true,
      error: "",
    });
  });
  it("should handle RESET_PASSWORD_SUCCESS", () => {
    expect(
      resetPasswordReducer(initialState, {
        type: types.RESET_PASSWORD_SUCCESS,
        payload: {status: "success"},
      })
    ).toEqual({
      data: {status: "success"},
      isLoading: true,
      error: "",
    });
  });
  it("should handle RESET_PASSWORD_ERROR", () => {
    expect(
      resetPasswordReducer(initialState, {
        type: types.RESET_PASSWORD_ERROR,
        payload: "ERROR",
      })
    ).toEqual({
      data: {},
      error: {payload: "ERROR", type: types.RESET_PASSWORD_ERROR},
      isLoading: true,
    });
  });
});
