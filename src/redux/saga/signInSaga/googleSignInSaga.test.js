/* eslint-disable no-undef */
import {takeLatest} from "redux-saga/effects";
import {runSaga} from "redux-saga";
import * as api from "../../../services/signInService/googleSignInService";
import {googleSignInSaga, watchGoogleSignIn} from "./googleSignInSaga";
import {
  googleSignInSuccess,
  googleSignInError,
} from "../../action/signInAction/googleSignInAction";

describe("watchGoogleSignIn", () => {
  const genObject = watchGoogleSignIn();
  it("should wait", () => {
    expect(genObject.next().value).toEqual(
      takeLatest("GOOGLE_SIGNIN_REQUEST", googleSignInSaga)
    );
  });
  it("should be done on next iteration", () => {
    expect(genObject.next().done).toBeTruthy();
  });
});

describe("test googleSignInSaga", () => {
  it("success triggers success action", () => {
    const data = {email: "customer1@gmail.com", password: "123456"};
    const generator = jest
      .spyOn(api, "googleSignInService")
      .mockImplementation(() => Promise.resolve(data));
    const dispatched = {
      payload: undefined,
      type: "GOOGLE_SIGNIN_SUCCESS",
    };
    const result = runSaga(
      {
        dispatch: (action) => Object.assign(dispatched, action),
      },
      googleSignInSaga
    );

    expect(result).toBeTruthy();
    expect(generator).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual(googleSignInSuccess());
    generator.mockClear();
  });
  it("failure triggers error action", () => {
    const generator = jest
      .spyOn(api, "googleSignInService")
      .mockImplementation(() => Promise.reject());
    const dispatched = {
      payload: undefined,
      type: "GOOGLE_SIGNIN_ERROR",
    };
    const result = runSaga(
      {
        dispatch: (action) => Object.assign(dispatched, action),
      },
      googleSignInSaga
    );

    expect(result).toBeTruthy();
    expect(generator).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual(googleSignInError());
    generator.mockClear();
  });
});
