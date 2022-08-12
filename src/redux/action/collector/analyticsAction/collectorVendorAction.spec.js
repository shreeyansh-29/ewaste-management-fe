/* eslint-disable no-undef */
import * as types from "../../../config/actionType";
import * as actions from "../../../action/collector/analyticsAction/collectorVendorAction";

describe("test collectorVendorAction", () => {
  const payload = {status: "success"};
  const error = {status: "fail"};
  it("test collectorVendorRequest function", () => {
    expect(actions.collectorVendorRequest()).toEqual({
      type: types.COLLECTOR_VENDOR_REQUEST,
    });
  });
  it("test collectorVendorSuccess function", () => {
    expect(actions.collectorVendorSuccess(payload)).toEqual({
      type: types.COLLECTOR_VENDOR_SUCCESS,
      payload,
    });
  });
  it("test collectorVendorError function", () => {
    expect(actions.collectorVendorError(error)).toEqual({
      type: types.COLLECTOR_VENDOR_ERROR,
      payload: error,
    });
  });
});
