/* eslint-disable no-undef */
import * as types from "../../config/actionType";
import * as actions from "../../action/signUpAction/signUpAction";

describe("test signUpAction", () => {
  const data = {email: "customer1@gmail.com", password: "123456"};
  const payload = {status: "success"};
  const error = {status: "fail"};
  it("test signUpRequest function", () => {
    expect(actions.signUpRequest(data)).toEqual({
      type: types.SIGN_UP_REQUEST,
      data,
    });
  });
  it("test signUpSuccess function", () => {
    expect(actions.signUpSuccess(payload)).toEqual({
      type: types.SIGN_UP_SUCCESS,
      response: payload,
    });
  });
  it("test signUpError function", () => {
    expect(actions.signUpError(error)).toEqual({
      type: types.SIGN_UP_ERROR,
      error: error,
    });
  });
});
