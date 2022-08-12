/* eslint-disable no-undef */
import * as types from "../../../config/actionType";
import * as actions from "../../../action/vendor/vendorMyOrdersAction/vendorMyOrdersAction";

describe("test vendorMyOrdersAction", () => {
  const payload = {status: "success"};
  const error = {status: "fail"};
  it("test vendorMyOrdersRequest function", () => {
    expect(actions.vendorMyOrdersRequest()).toEqual({
      type: types.VENDOR_MYORDERS_REQUEST,
    });
  });
  it("test vendorMyOrdersSuccess function", () => {
    expect(actions.vendorMyOrdersSuccess(payload)).toEqual({
      type: types.VENDOR_MYORDERS_SUCCESS,
      payload,
    });
  });
  it("test vendorMyOrdersError function", () => {
    expect(actions.vendorMyOrdersError(error)).toEqual({
      type: types.VENDOR_MYORDERS_ERROR,
      payload: error,
    });
  });
});
