/* eslint-disable no-undef */
import * as types from "../../../config/actionType";
import * as actions from "../../../action/vendor/analyticsAction/vendorCollectorDataAction";

describe("test vendorCollectorDataAction", () => {
  const payload = {status: "success"};
  const error = {status: "fail"};
  it("test vendorCollectorDataRequest function", () => {
    expect(actions.vendorCollectorDataRequest()).toEqual({
      type: types.VENDOR_COLLECTOR_DATA_REQUEST,
    });
  });
  it("test vendorCollectorDataSuccess function", () => {
    expect(actions.vendorCollectorDataSuccess(payload)).toEqual({
      type: types.VENDOR_COLLECTOR_DATA_SUCCESS,
      payload,
    });
  });
  it("test vendorCollectorDataError function", () => {
    expect(actions.vendorCollectorDataError(error)).toEqual({
      type: types.VENDOR_COLLECTOR_DATA_ERROR,
      payload: error,
    });
  });
});
