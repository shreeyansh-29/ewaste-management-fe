/* eslint-disable no-undef */
import * as types from "../../config/actionType";
import * as actions from "../../action/signInAction/googleSignInAction";

describe("test googleSignInAction", () => {
  const data = {email: "customer1@gmail.com", password: "123456"};
  const payload = {status: "success"};
  const error = {status: "fail"};
  it("test googleSignInRequest function", () => {
    expect(actions.googleSignInRequest(data)).toEqual({
      type: types.GOOGLE_SIGNIN_REQUEST,
      payload: data,
    });
  });
  it("test googleSignInSuccess function", () => {
    expect(actions.googleSignInSuccess(payload)).toEqual({
      type: types.GOOGLE_SIGNIN_SUCCESS,
      payload,
    });
  });
  it("test googleSignInError function", () => {
    expect(actions.googleSignInError(error)).toEqual({
      type: types.GOOGLE_SIGNIN_ERROR,
      payload: error,
    });
  });
});
