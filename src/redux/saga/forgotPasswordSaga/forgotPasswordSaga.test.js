/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import {takeLatest} from "redux-saga/effects";
import {runSaga} from "redux-saga";
import * as api from "../../../services/forgotPasswordService/forgotPasswordService";
import {forgotPassword, watchForgotPasswordSaga} from "./forgotPasswordSaga";
import {
  forgotPasswordError,
  forgotPasswordSuccess,
} from "../../action/forgotPasswordAction/forgotPasswordAction";

describe("watchForgotPasswordSaga", () => {
  const genObject = watchForgotPasswordSaga();
  it("should wait", () => {
    expect(genObject.next().value).toEqual(
      takeLatest("FORGOT_PASSWORD_REQUEST", forgotPassword)
    );
  });
  it("should be done on next iteration", () => {
    expect(genObject.next().done).toBeTruthy();
  });
});

describe("test collectorSummarySaga", () => {
  it("success triggers success action", () => {
    const data = {email: "customer1@gmail.com"};
    const generator = jest
      .spyOn(api, "forgotPasswordService")
      .mockImplementation(() => Promise.resolve(data));
    const dispatched = {
      payload: undefined,
      type: "FORGOT_PASSWORD_SUCCESS",
    };
    const result = runSaga(
      {
        dispatch: (action) => Object.assign(dispatched, action),
      },
      forgotPassword
    );

    expect(result).toBeTruthy();
    expect(generator).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual(forgotPasswordSuccess());
    generator.mockClear();
  });
  it("failure triggers error action", () => {
    const generator = jest
      .spyOn(api, "forgotPasswordService")
      .mockImplementation(() => Promise.reject());
    const dispatched = {
      payload: undefined,
      type: "FORGOT_PASSWORD_ERROR",
    };
    const result = runSaga(
      {
        dispatch: (action) => Object.assign(dispatched, action),
      },
      forgotPassword
    );

    expect(result).toBeTruthy();
    expect(generator).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual(forgotPasswordError());
    generator.mockClear();
  });
});
