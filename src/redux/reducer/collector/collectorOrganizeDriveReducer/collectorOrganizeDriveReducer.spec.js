/* eslint-disable no-undef */
import * as types from "../../../config/actionType";
import {collectorOrganizeDriveReducer} from "./collectorOrganizeDriveReducer";

describe("collectorOrganizeDriveReducer", () => {
  it("should return the initial state", () => {
    const initialState1 = {
      data: {},
      isLoading: false,
      error: "",
    };
    const newState = collectorOrganizeDriveReducer(undefined, {});
    expect(newState).toEqual(initialState1);
  });
  const initialState = {
    data: {},
    isLoading: true,
    error: "",
  };
  it("should handle COLLECTOR_ORGANIZE_REQUEST", () => {
    expect(
      collectorOrganizeDriveReducer(initialState, {
        type: types.COLLECTOR_ORGANIZE_REQUEST,
      })
    ).toEqual({
      data: {},
      isLoading: true,
      error: "",
    });
  });
  it("should handle COLLECTOR_ORGANIZE_SUCCESS", () => {
    expect(
      collectorOrganizeDriveReducer(initialState, {
        type: types.COLLECTOR_ORGANIZE_SUCCESS,
        payload: {status: "success"},
      })
    ).toEqual({
      data: {status: "success"},
      isLoading: true,
      error: "",
    });
  });
  it("should handle COLLECTOR_ORGANIZE_ERROR", () => {
    expect(
      collectorOrganizeDriveReducer(initialState, {
        type: types.COLLECTOR_ORGANIZE_ERROR,
        payload: "ERROR",
      })
    ).toEqual({
      data: {},
      error: {
        payload: "ERROR",
        type: types.COLLECTOR_ORGANIZE_ERROR,
      },

      isLoading: true,
    });
  });
});
