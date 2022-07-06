/* eslint-disable no-undef */
import * as types from "../../../config/actionType";
import * as actions from "../../../action/vendor/analyticsAction/vendorCategoryAction";

describe("test vendorCategoryAction", () => {
  const payload = {status: "success"};
  const error = {status: "fail"};
  it("test vendorCategoryRequest function", () => {
    expect(actions.vendorCategoryRequest()).toEqual({
      type: types.VENDOR_CATEGORY_REQUEST,
    });
  });
  it("test vendorCategorySuccess function", () => {
    expect(actions.vendorCategorySuccess(payload)).toEqual({
      type: types.VENDOR_CATEGORY_SUCCESS,
      payload,
    });
  });
  it("test vendorCategoryError function", () => {
    expect(actions.vendorCategoryError(error)).toEqual({
      type: types.VENDOR_CATEGORY_ERROR,
      payload: error,
    });
  });
});
