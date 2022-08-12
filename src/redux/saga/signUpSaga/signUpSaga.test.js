/* eslint-disable no-undef */
import {takeLatest} from "redux-saga/effects";
import * as api from "../../../services/signUpService/signUpService";
import {signUpSaga, watchSignUpSaga} from "./signUpSaga";
import {
  signUpError,
  signUpSuccess,
} from "../../action/signUpAction/signUpAction";
import {runSaga} from "redux-saga";

describe("watchSignUpSaga", () => {
  const genObject = watchSignUpSaga();
  it("should wait", () => {
    expect(genObject.next().value).toEqual(
      takeLatest("SIGN_UP_REQUEST", signUpSaga)
    );
  });
  it("should be done on next iteration", () => {
    expect(genObject.next().done).toBeTruthy();
  });
});
describe("test signUpSaga", () => {
  it("success triggers success action", () => {
    const data = {email: "customer1@gmail.com", password: "123456"};
    const generator = jest
      .spyOn(api, "signUpService")
      .mockImplementation(() => Promise.resolve(data));
    const dispatched = {
      payload: undefined,
      type: "SIGN_UP_SUCCESS",
    };
    const result = runSaga(
      {
        dispatch: (action) => Object.assign(dispatched, action),
      },
      signUpSaga
    );

    expect(result).toBeTruthy();
    expect(generator).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual(signUpSuccess());
    generator.mockClear();
  });
  it("failure triggers error action", () => {
    const generator = jest
      .spyOn(api, "signUpService")
      .mockImplementation(() => Promise.reject());
    const dispatched = {
      payload: undefined,
      type: "SIGN_UP_ERROR",
    };
    const result = runSaga(
      {
        dispatch: (action) => Object.assign(dispatched, action),
      },
      signUpSaga
    );

    expect(result).toBeTruthy();
    expect(generator).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual(signUpError());
    generator.mockClear();
  });
});
