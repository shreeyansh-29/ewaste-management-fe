/* eslint-disable no-undef */
import * as types from "../../../config/actionType";
import {customerNotificationCountReducer} from "./customerNotificationCountReducer";

describe("customerNotificationCountReducer", () => {
  it("should return the initial state", () => {
    const initialState1 = {
      data: {},
      isLoading: false,
      error: "",
    };
    const newState = customerNotificationCountReducer(undefined, {});
    expect(newState).toEqual(initialState1);
  });
  const initialState = {
    data: {},
    isLoading: true,
    error: "",
  };
  it("should handle CUSTOMER_NOTIFICATION_COUNT_REQUEST ", () => {
    expect(
      customerNotificationCountReducer(initialState, {
        type: types.CUSTOMER_NOTIFICATION_COUNT_REQUEST,
      })
    ).toEqual({
      data: {},
      isLoading: true,
      error: "",
    });
  });
  it("should handle CUSTOMER_NOTIFICATION_COUNT_SUCCESS", () => {
    expect(
      customerNotificationCountReducer(initialState, {
        type: types.CUSTOMER_NOTIFICATION_COUNT_SUCCESS,
        payload: {count: 3},
      })
    ).toEqual({
      data: {
        payload: {count: 3},
        type: types.CUSTOMER_NOTIFICATION_COUNT_SUCCESS,
      },
      isLoading: true,
      error: "",
    });
  });
  it("should handle CUSTOMER_NOTIFICATION_COUNT_ERROR", () => {
    expect(
      customerNotificationCountReducer(initialState, {
        type: types.CUSTOMER_NOTIFICATION_COUNT_ERROR,
        payload: "ERROR",
      })
    ).toEqual({
      data: {},
      error: {payload: "ERROR", type: types.CUSTOMER_NOTIFICATION_COUNT_ERROR},
      isLoading: true,
    });
  });
});
