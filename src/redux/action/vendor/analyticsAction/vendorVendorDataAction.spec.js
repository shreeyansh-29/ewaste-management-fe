/* eslint-disable no-undef */
import * as types from "../../../config/actionType";
import * as actions from "../../../action/vendor/analyticsAction/vendorVendorDataAction";

describe("test vendorVendorDataAction", () => {
  const payload = {status: "success"};
  const error = {status: "fail"};
  it("test vendorVendorDataRequest function", () => {
    expect(actions.vendorVendorDataRequest()).toEqual({
      type: types.VENDOR_VENDOR_DATA_REQUEST,
    });
  });
  it("test vendorVendorDataSuccess function", () => {
    expect(actions.vendorVendorDataSuccess(payload)).toEqual({
      type: types.VENDOR_VENDOR_DATA_SUCCESS,
      payload,
    });
  });
  it("test vendorVendorDataError function", () => {
    expect(actions.vendorVendorDataError(error)).toEqual({
      type: types.VENDOR_VENDOR_DATA_ERROR,
      payload: error,
    });
  });
});
