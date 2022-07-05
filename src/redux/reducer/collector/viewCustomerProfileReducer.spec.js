/* eslint-disable no-undef */
import * as types from "../../config/actionType";
import {viewCustomerProfileReducer} from "./viewCustomerProfileReducer";

describe("viewCustomerProfileReducer", () => {
  it("should return the initial state", () => {
    const initialState = {
      obj: {},
    };
    const newState = viewCustomerProfileReducer(undefined, {});
    expect(newState).toEqual(initialState);
  });
  const initialState = {
    obj: {},
  };
  it("should handle COLLECTOR_CUSTOMERPROFILE_REQUEST", () => {
    expect(
      viewCustomerProfileReducer(initialState, {
        type: types.COLLECTOR_CUSTOMERPROFILE_REQUEST,
      })
    ).toEqual({});
  });
  //   it("should handle COLLECTOR_CUSTOMERPROFILE_SUCCESS", () => {
  //     expect(
  //       viewCustomerProfileReducer(initialState, {
  //         type: types.COLLECTOR_CUSTOMERPROFILE_SUCCESS,
  //       })
  //     ).toEqual({});
  //   });
  it("should handle COLLECTOR_CUSTOMERPROFILE_ERROR", () => {
    expect(
      viewCustomerProfileReducer(initialState, {
        type: types.COLLECTOR_CUSTOMERPROFILE_ERROR,
        payload: "ERROR",
      })
    ).toEqual({
      payload: "ERROR",
      type: types.COLLECTOR_CUSTOMERPROFILE_ERROR,
    });
  });
});
