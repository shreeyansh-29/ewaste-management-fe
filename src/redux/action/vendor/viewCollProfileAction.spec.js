/* eslint-disable no-undef */
import * as types from "../../config/actionType";
import * as actions from "../../action/vendor/viewCollProfileAction";

describe("test viewCollProfileAction", () => {
  const data = {count: 1};
  const payload = {status: "success"};
  const error = {status: "fail"};
  it("test vendorViewAcceptCollectorRequest function", () => {
    expect(actions.vendorViewAcceptCollectorRequest(data)).toEqual({
      type: types.VENDOR_COLLECTORPROFILE_REQUEST,
      payload: data,
    });
  });
  it("test vendorViewAcceptCollectorSuccess function", () => {
    expect(actions.vendorViewAcceptCollectorSuccess(payload)).toEqual({
      type: types.VENDOR_COLLECTORPROFILE_SUCCESS,
      payload,
    });
  });
  it("test vendorViewAcceptCollectorError function", () => {
    expect(actions.vendorViewAcceptCollectorError(error)).toEqual({
      type: types.VENDOR_COLLECTORPROFILE_ERROR,
      payload: error,
    });
  });
});
