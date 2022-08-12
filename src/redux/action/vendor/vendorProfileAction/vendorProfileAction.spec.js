/* eslint-disable no-undef */
import * as types from "../../../config/actionType";
import * as actions from "../../../action/vendor/vendorProfileAction/vendorProfileAction";

describe("test vendorProfileAction", () => {
  const payload = {status: "success"};
  const error = {status: "fail"};
  it("test vendorProfileRequest function", () => {
    expect(actions.vendorProfileRequest()).toEqual({
      type: types.VENDOR_PROFILE_REQUEST,
    });
  });
  it("test vendorProfileSuccess function", () => {
    expect(actions.vendorProfileSuccess(payload)).toEqual({
      type: types.VENDOR_PROFILE_SUCCESS,
      payload,
    });
  });
  it("test vendorProfileError function", () => {
    expect(actions.vendorProfileError(error)).toEqual({
      type: types.VENDOR_PROFILE_ERROR,
      payload: error,
    });
  });
});
