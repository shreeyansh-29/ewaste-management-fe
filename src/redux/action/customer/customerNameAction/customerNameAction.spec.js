/* eslint-disable no-undef */
import * as types from "../../../config/actionType";
import * as actions from "../../../action/customer/customerNameAction/customerNameAction";

describe("test customerNameAction", () => {
  const payload = {status: "success"};
  const error = {status: "fail"};
  it("test customerNameRequest function", () => {
    expect(actions.customerNameRequest()).toEqual({
      type: types.CUSTOMER_NAME_REQUEST,
    });
  });
  it("test customerNameSuccess function", () => {
    expect(actions.customerNameSuccess(payload)).toEqual({
      type: types.CUSTOMER_NAME_SUCCESS,
      payload: undefined,
    });
  });
  it("test customerNameError function", () => {
    expect(actions.customerNameError(error)).toEqual({
      type: types.CUSTOMER_NAME_ERROR,
      payload: error,
    });
  });
});
