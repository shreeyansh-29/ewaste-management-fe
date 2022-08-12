/* eslint-disable no-undef */
import * as types from "../../../config/actionType";
import * as actions from "../../../action/customer/analyticsAction/customerDrivesAction";

describe("test customerDrivesAction", () => {
  const payload = {status: "success"};
  const error = {status: "fail"};
  it("test customerDrivesRequest function", () => {
    expect(actions.customerDrivesRequest()).toEqual({
      type: types.CUSTOMER_DRIVES_REQUEST,
    });
  });
  it("test customerDrivesSuccess function", () => {
    expect(actions.customerDrivesSuccess(payload)).toEqual({
      type: types.CUSTOMER_DRIVES_SUCCESS,
      payload,
    });
  });
  it("test customerDrivesError function", () => {
    expect(actions.customerDrivesError(error)).toEqual({
      type: types.CUSTOMER_DRIVES_ERROR,
      payload: error,
    });
  });
});
