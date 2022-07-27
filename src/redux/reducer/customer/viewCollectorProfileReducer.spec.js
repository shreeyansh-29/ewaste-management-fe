/* eslint-disable no-undef */
import * as types from "../../config/actionType";
import {viewCollectorProfileReducer} from "./viewCollectorProfileReducer";

describe("viewCollectorProfileReducer", () => {
  it("should return the initial state", () => {
    const initialState1 = {
      data: {},
      isLoading: false,
      error: "",
    };
    const newState = viewCollectorProfileReducer(undefined, {});
    expect(newState).toEqual(initialState1);
  });
  const initialState = {
    data: {},
    isLoading: true,
    error: "",
  };
  it("should handle CUSTOMER_COLLECTORPROFILE_REQUEST", () => {
    expect(
      viewCollectorProfileReducer(initialState, {
        type: types.CUSTOMER_COLLECTORPROFILE_REQUEST,
      })
    ).toEqual({
      data: {},
      isLoading: true,
      error: "",
    });
  });
  it("should handle CUSTOMER_COLLECTORPROFILE_SUCCESS", () => {
    expect(
      viewCollectorProfileReducer(initialState, {
        type: types.CUSTOMER_COLLECTORPROFILE_SUCCESS,
        payload: {status: "success"},
      })
    ).toEqual({
      data: {status: "success"},
      isLoading: true,
      error: "",
    });
  });
  it("should handle CUSTOMER_COLLECTORPROFILE_ERROR", () => {
    expect(
      viewCollectorProfileReducer(initialState, {
        type: types.CUSTOMER_COLLECTORPROFILE_ERROR,
        payload: "ERROR",
      })
    ).toEqual({
      data: {},
      error: "ERROR",

      isLoading: true,
    });
  });
});
