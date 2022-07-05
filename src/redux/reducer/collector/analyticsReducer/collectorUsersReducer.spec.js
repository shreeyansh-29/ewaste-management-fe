/* eslint-disable no-undef */
import * as types from "../../../config/actionType";
import {collectorUsersReducer} from "./collectorUsersReducer";

describe("collectorUsersReducer", () => {
  it("should return the initial state", () => {
    const initialState = {
      data: {},
      isLoading: false,
      error: "",
    };
    const newState = collectorUsersReducer(undefined, {});
    expect(newState).toEqual(initialState);
  });
  const initialState = {
    data: {},
    isLoading: true,
    error: "",
  };
  it("should handle COLLECTOR_USERS_REQUEST", () => {
    expect(
      collectorUsersReducer(initialState, {
        type: types.COLLECTOR_USERS_REQUEST,
      })
    ).toEqual({
      data: {},
      isLoading: true,
      error: "",
    });
  });
  it("should handle COLLECTOR_USERS_SUCCESS", () => {
    expect(
      collectorUsersReducer(initialState, {
        type: types.COLLECTOR_USERS_SUCCESS,
        payload: {status: "success"},
      })
    ).toEqual({
      data: {status: "success"},
      isLoading: true,
      error: "",
    });
  });
  it("should handle COLLECTOR_USERS_ERROR", () => {
    expect(
      collectorUsersReducer(initialState, {
        type: types.COLLECTOR_USERS_ERROR,
        payload: "ERROR",
      })
    ).toEqual({
      data: {},
      error: {payload: "ERROR", type: types.COLLECTOR_USERS_ERROR},
      isLoading: true,
    });
  });
});
