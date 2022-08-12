/* eslint-disable no-undef */
import * as types from "../../../config/actionType";
import * as actions from "../../../action/customer/customerProfileAction/customerProfileEditAction";

describe("test customerProfileEditAction", () => {
  const data = {firstName: "Shrey", lastName: "Singh"};
  const payload = {status: "success"};
  const error = {status: "fail"};
  it("test customerProfileEditRequest function", () => {
    expect(actions.customerProfileEditRequest(data)).toEqual({
      type: types.CUSTOMER_PROFILE_EDIT_REQUEST,
      payload: data,
    });
  });
  it("test customerProfileSuccess function", () => {
    expect(actions.customerProfileEditSuccess(payload)).toEqual({
      type: types.CUSTOMER_PROFILE_EDIT_SUCCESS,
      payload,
    });
  });
  it("test customerProfileError function", () => {
    expect(actions.customerProfileEditError(error)).toEqual({
      type: types.CUSTOMER_PROFILE_EDIT_ERROR,
      payload: error,
    });
  });
});
