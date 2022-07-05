/* eslint-disable no-undef */
import * as types from "../../../config/actionType";
import {customerNotificationDataReducer} from "./customerNotificationDataReducer";

describe("customerNotificationDataReducer", () => {
  it("should return the initial state", () => {
    const initialState = {
      data: {},
      isLoading: false,
      error: "",
    };
    const newState = customerNotificationDataReducer(undefined, {});
    expect(newState).toEqual(initialState);
  });
  const initialState = {
    data: {},
    isLoading: true,
    error: "",
  };
  it("should handle CUSTOMER_NOTIFICATION_DATA_REQUEST", () => {
    expect(
      customerNotificationDataReducer(initialState, {
        type: types.CUSTOMER_NOTIFICATION_DATA_REQUEST,
      })
    ).toEqual({
      data: {},
      isLoading: true,
      error: "",
    });
  });
  it("should handle CUSTOMER_NOTIFICATION_DATA_SUCCESS", () => {
    expect(
      customerNotificationDataReducer(initialState, {
        type: types.CUSTOMER_NOTIFICATION_DATA_SUCCESS,
        payload: {status: "success"},
      })
    ).toEqual({
      data: {},
      isLoading: true,
      error: "",
    });
  });
  it("should handle CUSTOMER_NOTIFICATION_DATA_ERROR", () => {
    expect(
      customerNotificationDataReducer(initialState, {
        type: types.CUSTOMER_NOTIFICATION_DATA_ERROR,
        payload: "ERROR",
      })
    ).toEqual({
      data: {},
      error: "",
      isLoading: true,
    });
  });
});
