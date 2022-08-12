/* eslint-disable no-undef */
import * as types from "../../config/actionType";
import * as actions from "../../action/vendor/viewAcceptCollectorProfileAction";

describe("test viewAcceptCollectorProfileAction", () => {
  const data = {count: 1};
  const payload = {status: "success"};
  const error = {status: "fail"};
  it("test vendorCollectorProfileRequest function", () => {
    expect(actions.vendorCollectorProfileRequest(data)).toEqual({
      type: types.VENDOR_COLLECTORPROFILE_ACCEPT_REQUEST,
      payload: data,
    });
  });
  it("test vendorCollectorProfileSuccess function", () => {
    expect(actions.vendorCollectorProfileSuccess(payload)).toEqual({
      type: types.VENDOR_COLLECTORPROFILE_ACCEPT_SUCCESS,
      payload,
    });
  });
  it("test vendorCollectorProfileError function", () => {
    expect(actions.vendorCollectorProfileError(error)).toEqual({
      type: types.VENDOR_COLLECTORPROFILE_ACCEPT_ERROR,
      payload: error,
    });
  });
});
