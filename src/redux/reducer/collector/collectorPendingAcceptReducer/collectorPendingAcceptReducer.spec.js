/* eslint-disable no-undef */
import * as types from "../../../config/actionType";
import {collectorPendingAcceptReducer} from "./collectorPendingAcceptReducer";

describe("collectorNotificationDataReducer", () => {
  it("should return the initial state", () => {
    const initialState1 = {
      data: {},
      isLoading: false,
      error: "",
    };
    const newState = collectorPendingAcceptReducer(undefined, {});
    expect(newState).toEqual(initialState1);
  });
  const initialState = {
    data: {},
    isLoading: true,
    error: "",
  };
  it("should handle COLLECTOR_PENDING_ACCEPT_REQUEST", () => {
    expect(
      collectorPendingAcceptReducer(initialState, {
        type: types.COLLECTOR_PENDING_ACCEPT_REQUEST,
      })
    ).toEqual({
      data: {},
      isLoading: true,
      error: "",
    });
  });
  it("should handle COLLECTOR_PENDING_ACCEPT_SUCCESS", () => {
    expect(
      collectorPendingAcceptReducer(initialState, {
        type: types.COLLECTOR_PENDING_ACCEPT_SUCCESS,
        payload: {status: "success"},
      })
    ).toEqual({
      data: {status: "success"},
      isLoading: true,
      error: "",
    });
  });
  it("should handle COLLECTOR_PENDING_ACCEPT_ERROR", () => {
    expect(
      collectorPendingAcceptReducer(initialState, {
        type: types.COLLECTOR_PENDING_ACCEPT_ERROR,
        payload: "ERROR",
      })
    ).toEqual({
      data: {},
      error: "ERROR",

      isLoading: true,
    });
  });
});
