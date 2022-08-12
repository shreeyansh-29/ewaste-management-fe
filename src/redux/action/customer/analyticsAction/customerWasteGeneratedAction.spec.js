/* eslint-disable no-undef */
import * as types from "../../../config/actionType";
import * as actions from "./customerWasteGeneratedAction";

describe("test customerWasteGeneratedAction", () => {
  const payload = {status: "success"};
  const error = {status: "fail"};
  it("test customerWasteGeneratedRequest function", () => {
    expect(actions.customerWasteGeneratedRequest()).toEqual({
      type: types.CUSTOMER_WASTEGENERATED_REQUEST,
    });
  });
  it("test customerWasteGeneratedSuccess function", () => {
    expect(actions.customerWasteGeneratedSuccess(payload)).toEqual({
      type: types.CUSTOMER_WASTEGENERATED_SUCCESS,
      payload,
    });
  });
  it("test customerWasteGeneratedError function", () => {
    expect(actions.customerWasteGeneratedError(error)).toEqual({
      type: types.CUSTOMER_WASTEGENERATED_ERROR,
      payload: error,
    });
  });
});
