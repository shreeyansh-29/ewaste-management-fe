/* eslint-disable no-undef */
import * as types from "../../config/actionType";
import {viewCustomerProfileReducer} from "./viewCustomerProfileReducer";

describe("viewCustomerProfileReducer", () => {
  it("should return the initial state", () => {
    const initialState1 = {
      data: {},
      isLoading: false,
      error: "",
    };
    const newState = viewCustomerProfileReducer(undefined, {});
    expect(newState).toEqual(initialState1);
  });
  const initialState = {
    data: {},
    isLoading: true,
    error: "",
  };
  it("should handle COLLECTOR_CUSTOMERPROFILE_REQUEST", () => {
    expect(
      viewCustomerProfileReducer(initialState, {
        type: types.COLLECTOR_CUSTOMERPROFILE_REQUEST,
      })
    ).toEqual({
      data: {},
      isLoading: true,
      error: "",
    });
  });
  it("should handle COLLECTOR_CUSTOMERPROFILE_SUCCESS", () => {
    expect(
      viewCustomerProfileReducer(initialState, {
        type: types.COLLECTOR_CUSTOMERPROFILE_SUCCESS,
        payload: {status: "success"},
      })
    ).toEqual({
      data: {status: "success"},
      isLoading: true,
      error: "",
    });
  });
  it("should handle COLLECTOR_CUSTOMERPROFILE_ERROR", () => {
    expect(
      viewCustomerProfileReducer(initialState, {
        type: types.COLLECTOR_CUSTOMERPROFILE_ERROR,
        payload: "ERROR",
      })
    ).toEqual({
      data: {},
      error: {
        payload: "ERROR",
        type: types.COLLECTOR_CUSTOMERPROFILE_ERROR,
      },
      isLoading: true,
    });
  });
});
