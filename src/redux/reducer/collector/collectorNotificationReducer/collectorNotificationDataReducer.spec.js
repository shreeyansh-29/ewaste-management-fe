/* eslint-disable no-undef */
import * as types from "../../../config/actionType";
import {collectorNotificationDataReducer} from "./collectorNotificationDataReducer";

describe("collectorNotificationDataReducer", () => {
  it("should return the initial state", () => {
    const initialState1 = {
      data: {},
      isLoading: false,
      error: "",
    };
    const newState = collectorNotificationDataReducer(undefined, {});
    expect(newState).toEqual(initialState1);
  });
  const initialState = {
    data: {},
    isLoading: true,
    error: "",
  };
  it("should handle COLLECTOR_NOTIFICATION_DATA_REQUEST", () => {
    expect(
      collectorNotificationDataReducer(initialState, {
        type: types.COLLECTOR_NOTIFICATION_DATA_REQUEST,
      })
    ).toEqual({
      data: {},
      isLoading: true,
      error: "",
    });
  });
  it("should handle COLLECTOR_NOTIFICATION_DATA_SUCCESS", () => {
    expect(
      collectorNotificationDataReducer(initialState, {
        type: types.COLLECTOR_NOTIFICATION_DATA_SUCCESS,
        payload: {status: "success"},
      })
    ).toEqual({
      data: {
        payload: {status: "success"},
        type: types.COLLECTOR_NOTIFICATION_DATA_SUCCESS,
      },
      isLoading: true,
      error: "",
    });
  });
  it("should handle COLLECTOR_NOTIFICATION_DATA_ERROR", () => {
    expect(
      collectorNotificationDataReducer(initialState, {
        type: types.COLLECTOR_NOTIFICATION_DATA_ERROR,
        payload: "ERROR",
      })
    ).toEqual({
      data: {},
      error: {
        payload: "ERROR",
        type: types.COLLECTOR_NOTIFICATION_DATA_ERROR,
      },

      isLoading: true,
    });
  });
});
