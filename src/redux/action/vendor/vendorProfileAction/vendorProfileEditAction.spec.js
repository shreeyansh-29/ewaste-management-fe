/* eslint-disable no-undef */
import * as types from "../../../config/actionType";
import * as actions from "../../../action/vendor/vendorProfileAction/vendorProfileEditAction";

describe("test vendorProfileEditAction", () => {
  const data = {firstName: "Randy", lastName: "Orton"};
  const payload = {status: "success"};
  const error = {status: "fail"};
  it("test vendorProfileEditRequest function", () => {
    expect(actions.vendorProfileEditRequest(data)).toEqual({
      type: types.VENDOR_PROFILE_EDIT_REQUEST,
      payload: data,
    });
  });
  it("test vendorProfileEditSuccess function", () => {
    expect(actions.vendorProfileEditSuccess(payload)).toEqual({
      type: types.VENDOR_PROFILE_EDIT_SUCCESS,
      payload,
    });
  });
  it("test vendorProfileEditError function", () => {
    expect(actions.vendorProfileEditError(error)).toEqual({
      type: types.VENDOR_PROFILE_EDIT_ERROR,
      payload: error,
    });
  });
});
