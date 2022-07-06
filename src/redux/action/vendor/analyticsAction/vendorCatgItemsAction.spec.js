/* eslint-disable no-undef */
import * as types from "../../../config/actionType";
import * as actions from "../../../action/vendor/analyticsAction/vendorCatgItemsAction";

describe("test vendorCatgItemsAction", () => {
  const payload = {status: "success"};
  const error = {status: "fail"};
  it("test vendorCatgItemsRequest function", () => {
    expect(actions.vendorCatgItemsRequest()).toEqual({
      type: types.VENDOR_CATGITEMS_REQUEST,
    });
  });
  it("test vendorCategorySuccess function", () => {
    expect(actions.vendorCatgItemsSuccess(payload)).toEqual({
      type: types.VENDOR_CATGITEMS_SUCCESS,
      payload,
    });
  });
  it("test vendorCategoryError function", () => {
    expect(actions.vendorCatgItemsError(error)).toEqual({
      type: types.VENDOR_CATGITEMS_ERROR,
      payload: error,
    });
  });
});
