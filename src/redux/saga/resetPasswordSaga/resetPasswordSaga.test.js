/* eslint-disable no-undef */
import {takeLatest} from "redux-saga/effects";
import {runSaga} from "redux-saga";
import * as api from "../../service/resetPasswordService/resetPasswordService";
import {resetPassword, watchResetPasswordSaga} from "./resetPasswordSaga";
import {
  resetPasswordError,
  resetPasswordSuccess,
} from "../../action/resetPasswordAction/resetPasswordAction";

describe("watchResetPasswordSaga", () => {
  const genObject = watchResetPasswordSaga();
  it("should wait", () => {
    expect(genObject.next().value).toEqual(
      takeLatest("RESET_PASSWORD_REQUEST", resetPassword)
    );
  });
  it("should be done on next iteration", () => {
    expect(genObject.next().done).toBeTruthy();
  });
});

describe("test resetPasswordSaga", () => {
  it("success triggers success action", () => {
    const data = {password: "123456", confirmPassword: "123456"};
    const generator = jest
      .spyOn(api, "resetPasswordService")
      .mockImplementation(() => Promise.resolve(data));
    const dispatched = {
      payload: undefined,
      type: "RESET_PASSWORD_SUCCESS",
    };
    const result = runSaga(
      {
        dispatch: (action) => Object.assign(dispatched, action),
      },
      resetPassword
    );

    expect(result).toBeTruthy();
    expect(generator).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual(resetPasswordSuccess());
    generator.mockClear();
  });
  it("failure triggers error action", () => {
    const generator = jest
      .spyOn(api, "resetPasswordService")
      .mockImplementation(() => Promise.reject());
    const dispatched = {
      payload: undefined,
      type: "RESET_PASSWORD_ERROR",
    };
    const result = runSaga(
      {
        dispatch: (action) => Object.assign(dispatched, action),
      },
      resetPassword
    );

    expect(result).toBeTruthy();
    expect(generator).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual(resetPasswordError());
    generator.mockClear();
  });
});
