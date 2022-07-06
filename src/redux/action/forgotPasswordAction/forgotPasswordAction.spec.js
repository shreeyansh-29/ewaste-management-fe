/* eslint-disable no-undef */
import * as types from "../../config/actionType";
import * as actions from "../../action/forgotPasswordAction/forgotPasswordAction";

describe("test ForgotPasswordAction", () => {
  const data = {email: "customer1@gmail.com"};
  const payload = {status: "success"};
  const error = {status: "fail"};
  it("test ForgotPasswordRequest function", () => {
    expect(actions.forgotPasswordRequest(data)).toEqual({
      type: types.FORGOT_PASSWORD_REQUEST,
      payload: data,
    });
  });
  it("test ForgotPasswordSuccess function", () => {
    expect(actions.forgotPasswordSuccess(payload)).toEqual({
      type: types.FORGOT_PASSWORD_SUCCESS,
      payload,
    });
  });
  it("test ForgotPasswordError function", () => {
    expect(actions.forgotPasswordError(error)).toEqual({
      type: types.FORGOT_PASSWORD_ERROR,
      payload: error,
    });
  });
});
