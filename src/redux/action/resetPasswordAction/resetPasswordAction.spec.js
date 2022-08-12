/* eslint-disable no-undef */
import * as types from "../../config/actionType";
import * as actions from "../../action/resetPasswordAction/resetPasswordAction";

describe("test resetPasswordAction", () => {
  const data = {password: "123456", confirmPassword: "123456"};
  const payload = {status: "success"};
  const error = {status: "fail"};
  it("test resetPasswordRequest function", () => {
    expect(actions.resetPasswordRequest(data)).toEqual({
      type: types.RESET_PASSWORD_REQUEST,
      payload: data,
    });
  });
  it("test resetPasswordSuccess function", () => {
    expect(actions.resetPasswordSuccess(payload)).toEqual({
      type: types.RESET_PASSWORD_SUCCESS,
      payload,
    });
  });
  it("test resetPasswordError function", () => {
    expect(actions.resetPasswordError(error)).toEqual({
      type: types.RESET_PASSWORD_ERROR,
      payload: error,
    });
  });
});
