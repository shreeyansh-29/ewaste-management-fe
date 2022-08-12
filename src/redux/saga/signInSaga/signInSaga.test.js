/* eslint-disable no-undef */
import {takeLatest} from "redux-saga/effects";
import {runSaga} from "redux-saga";
import * as api from "../../../services/signInService/signInService";
import {signInSaga, watchSignInSaga} from "./signInSaga";
import {
  signInError,
  signInSuccess,
} from "../../action/signInAction/signInActions";

describe("watchSignInSaga", () => {
  const genObject = watchSignInSaga();
  it("should wait", () => {
    expect(genObject.next().value).toEqual(
      takeLatest("SIGN_IN_REQUEST", signInSaga)
    );
  });
  it("should be done on next iteration", () => {
    expect(genObject.next().done).toBeTruthy();
  });
});

describe("test signInSaga", () => {
  it("success triggers success action", () => {
    const data = {email: "customer1@gmail.com", password: "123456"};
    const generator = jest
      .spyOn(api, "signInService")
      .mockImplementation(() => Promise.resolve(data));
    const dispatched = {
      payload: undefined,
      type: "SIGN_IN_SUCCESS",
    };
    const result = runSaga(
      {
        dispatch: (action) => Object.assign(dispatched, action),
      },
      signInSaga
    );

    expect(result).toBeTruthy();
    expect(generator).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual(signInSuccess());
    generator.mockClear();
  });
  it("failure triggers error action", () => {
    const generator = jest
      .spyOn(api, "signInService")
      .mockImplementation(() => Promise.reject());
    const dispatched = {
      payload: undefined,
      type: "SIGN_IN_ERROR",
    };
    const result = runSaga(
      {
        dispatch: (action) => Object.assign(dispatched, action),
      },
      signInSaga
    );

    expect(result).toBeTruthy();
    expect(generator).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual(signInError());
    generator.mockClear();
  });
});
