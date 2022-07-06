/* eslint-disable no-undef */
import * as types from "../../config/actionType";
import * as actions from "../../action/signInAction/signInActions";

describe("test signInAction", () => {
  const data = {email: "customer1@gmail.com", password: "123456"};
  const payload = {status: "success"};
  const error = {status: "fail"};
  it("test signInRequest function", () => {
    expect(actions.signInRequest(data)).toEqual({
      type: types.SIGN_IN_REQUEST,
      data,
    });
  });
  it("test signInSuccess function", () => {
    expect(actions.signInSuccess(payload)).toEqual({
      type: types.SIGN_IN_SUCCESS,
      response: payload,
    });
  });
  it("test signInError function", () => {
    expect(actions.signInError(error)).toEqual({
      type: types.SIGN_IN_ERROR,
      error: error,
    });
  });
});
