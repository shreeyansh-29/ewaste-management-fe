/* eslint-disable no-undef */
import * as types from "../../../config/actionType";
import * as actions from "../../../action/vendor/vendorNameAction/vendorNameAction";

describe("test vendorNameAction", () => {
  const payload = {status: "success"};
  const error = {status: "fail"};
  it("test vendorNameRequest function", () => {
    expect(actions.vendorNameRequest()).toEqual({
      type: types.VENDOR_NAME_REQUEST,
    });
  });
  it("test vendorNameSuccess function", () => {
    expect(actions.vendorNameSuccess(payload)).toEqual({
      type: types.VENDOR_NAME_SUCCESS,
      payload,
    });
  });
  it("test vendorNameError function", () => {
    expect(actions.vendorNameError(error)).toEqual({
      type: types.VENDOR_NAME_ERROR,
      payload: error,
    });
  });
});
