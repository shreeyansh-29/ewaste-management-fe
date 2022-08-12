/* eslint-disable no-undef */
import * as types from "../../../config/actionType";
import * as actions from "../../../action/customer/customerProfileAction/customerProfileAction";

describe("test customerProfileAction", () => {
  const payload = {status: "success"};
  const error = {status: "fail"};
  it("test customerProfileRequest function", () => {
    expect(actions.customerProfileRequest()).toEqual({
      type: types.CUSTOMER_PROFILE_REQUEST,
    });
  });
  it("test customerProfileSuccess function", () => {
    expect(actions.customerProfileSuccess(payload)).toEqual({
      type: types.CUSTOMER_PROFILE_SUCCESS,
      payload,
    });
  });
  it("test customerProfileError function", () => {
    expect(actions.customerProfileError(error)).toEqual({
      type: types.CUSTOMER_PROFILE_ERROR,
      payload: error,
    });
  });
});
