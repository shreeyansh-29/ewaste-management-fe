/* eslint-disable no-undef */
import * as types from "../../../config/actionType";
import * as actions from "../../../action/vendor/vendorSalesAction/vendorAcceptItemsAction";

describe("test vendorAcceptItemsAction", () => {
  const data = {quantity: 10};
  const payload = {status: "success"};
  const error = {status: "fail"};
  it("test vendorAcceptItemsRequest function", () => {
    expect(actions.vendorAcceptItemsRequest(data)).toEqual({
      type: types.VENDOR_ACCEPT_ITEMS_REQUEST,
      payload: data,
    });
  });
  it("test vendorAcceptItemsSuccess function", () => {
    expect(actions.vendorAcceptItemsSuccess(payload)).toEqual({
      type: types.VENDOR_ACCEPT_ITEMS_SUCCESS,
      payload,
    });
  });
  it("test vendorAcceptItemsError function", () => {
    expect(actions.vendorAcceptItemsError(error)).toEqual({
      type: types.VENDOR_ACCEPT_ITEMS_ERROR,
      payload: error,
    });
  });
});
