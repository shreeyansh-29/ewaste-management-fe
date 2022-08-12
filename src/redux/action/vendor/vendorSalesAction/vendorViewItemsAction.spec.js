/* eslint-disable no-undef */
import * as types from "../../../config/actionType";
import * as actions from "../../../action/vendor/vendorSalesAction/vendorViewItemsAction";

describe("test vendorViewItemsAction", () => {
  const payload = {status: "success"};
  const error = {status: "fail"};
  it("test vendorViewItemsRequest function", () => {
    expect(actions.vendorViewItemsRequest()).toEqual({
      type: types.VENDOR_VIEW_ITEMS_REQUEST,
    });
  });
  it("test vendorViewItemsSuccess function", () => {
    expect(actions.vendorViewItemsSuccess(payload)).toEqual({
      type: types.VENDOR_VIEW_ITEMS_SUCCESS,
      payload,
    });
  });
  it("test vendorViewItemsError function", () => {
    expect(actions.vendorViewItemsError(error)).toEqual({
      type: types.VENDOR_VIEW_ITEMS_ERROR,
      payload: error,
    });
  });
});
