/* eslint-disable no-undef */
import * as types from "../../../config/actionType";
import {customerViewCollectorsReducer} from "./customerViewCollectorReducer";

describe("customerViewCollectorReducer", () => {
  it("should return the initial state", () => {
    const initialState1 = {
      data: {},
      isLoading: false,
      error: "",
    };
    const newState = customerViewCollectorsReducer(undefined, {});
    expect(newState).toEqual(initialState1);
  });
  const initialState = {
    data: {},
    isLoading: true,
    error: "",
  };
  it("should handle CUSTOMER_VIEW_COLLECTORS_REQUEST ", () => {
    expect(
      customerViewCollectorsReducer(initialState, {
        type: types.CUSTOMER_VIEW_COLLECTORS_REQUEST,
      })
    ).toEqual({
      data: {},
      isLoading: true,
      error: "",
    });
  });
  it("should handle CUSTOMER_VIEW_COLLECTORS_SUCCESS", () => {
    expect(
      customerViewCollectorsReducer(initialState, {
        type: types.CUSTOMER_VIEW_COLLECTORS_SUCCESS,
        payload: {status: "success"},
      })
    ).toEqual({
      data: {},
      action: {
        payload: {status: "success"},
        type: types.CUSTOMER_VIEW_COLLECTORS_SUCCESS,
      },
      isLoading: true,
      error: "",
    });
  });
  it("should handle CUSTOMER_VIEW_COLLECTORS_ERROR", () => {
    expect(
      customerViewCollectorsReducer(initialState, {
        type: types.CUSTOMER_VIEW_COLLECTORS_ERROR,
        payload: "ERROR",
      })
    ).toEqual({
      data: {},
      error: "",
      action: {payload: "ERROR", type: types.CUSTOMER_VIEW_COLLECTORS_ERROR},
      isLoading: true,
    });
  });
});
