/* eslint-disable no-undef */
import * as types from "../../../config/actionType";
import * as actions from "../../../action/customer/analyticsAction/customerCollectorCategoriesAction";

describe("test customerCollectorCategoriesAction", () => {
  const payload = {status: "success"};
  const error = {status: "fail"};
  it("test customerCollectorCategoriesRequest function", () => {
    expect(actions.customerCollectorCategoriesRequest()).toEqual({
      type: types.CUSTOMER_COLLECTORCATEGORIES_REQUEST,
    });
  });
  it("test customerCollectorCategoriesSuccess function", () => {
    expect(actions.customerCollectorCategoriesSuccess(payload)).toEqual({
      type: types.CUSTOMER_COLLECTORCATEGORIES_SUCCESS,
      payload,
    });
  });
  it("test customerCollectorCategoriesError function", () => {
    expect(actions.customerCollectorCategoriesError(error)).toEqual({
      type: types.CUSTOMER_COLLECTORCATEGORIES_ERROR,
      payload: error,
    });
  });
});
