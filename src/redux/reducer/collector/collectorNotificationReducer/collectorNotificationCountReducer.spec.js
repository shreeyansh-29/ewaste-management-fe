/* eslint-disable no-undef */
import * as types from "../../../config/actionType";
import {collectorNotificationCountReducer} from "./collectorNotificationCountReducer";

describe("collectorNotificationCountReducer", () => {
  it("should return the initial state", () => {
    const initialState = {
      data: {},
      isLoading: false,
      error: "",
    };
    const newState = collectorNotificationCountReducer(undefined, {});
    expect(newState).toEqual(initialState);
  });
  const initialState = {
    data: {},
    isLoading: true,
    error: "",
  };
  it("should handle COLLECTOR_NOTIFICATION_COUNT_REQUEST", () => {
    expect(
      collectorNotificationCountReducer(initialState, {
        type: types.COLLECTOR_NOTIFICATION_COUNT_REQUEST,
      })
    ).toEqual({
      data: {},
      isLoading: true,
      error: "",
    });
  });
  it("should handle COLLECTOR_NOTIFICATION_COUNT_SUCCESS", () => {
    expect(
      collectorNotificationCountReducer(initialState, {
        type: types.COLLECTOR_NOTIFICATION_COUNT_SUCCESS,
        payload: {status: "success"},
      })
    ).toEqual({
      data: {
        payload: {status: "success"},
        type: types.COLLECTOR_NOTIFICATION_COUNT_SUCCESS,
      },
      isLoading: true,
      error: "",
    });
  });
  it("should handle COLLECTOR_NOTIFICATION_COUNT_ERROR", () => {
    expect(
      collectorNotificationCountReducer(initialState, {
        type: types.COLLECTOR_NOTIFICATION_COUNT_ERROR,
        payload: "ERROR",
      })
    ).toEqual({
      data: {},
      error: {
        payload: "ERROR",
        type: types.COLLECTOR_NOTIFICATION_COUNT_ERROR,
      },
      isLoading: true,
    });
  });
});
