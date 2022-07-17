/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import {call, put, takeLatest} from "redux-saga/effects";
import {runSaga} from "redux-saga";
import * as api from "../../service/collector/viewCustomerProfileService";
import {
  viewCustomerProfileError,
  viewCustomerProfileSuccess,
} from "../../action/collector/viewCustomerProfileAction";
import {
  viewCustomerProfileSaga,
  watchViewCustomerProfileSaga,
} from "./viewCustomerProfileSaga";

describe("watchViewCustomerProfileSaga", () => {
  const genObject = watchViewCustomerProfileSaga();
  it("should wait", () => {
    expect(genObject.next().value).toEqual(
      takeLatest("COLLECTOR_CUSTOMERPROFILE_REQUEST", viewCustomerProfileSaga)
    );
  });
  it("should be done on next iteration", () => {
    expect(genObject.next().done).toBeTruthy();
  });
});

describe("test viewCustomerProfileSaga", () => {
  it("success triggers success action", () => {
    const data = {id: 1};
    const generator = jest
      .spyOn(api, "viewCustomerProfileService")
      .mockImplementation(() => Promise.resolve(data));
    const dispatched = {
      payload: undefined,
      type: "COLLECTOR_CUSTOMERPROFILE_SUCCESS",
    };
    const result = runSaga(
      {
        dispatch: (action) => Object.assign(dispatched, action),
      },
      viewCustomerProfileSaga
    );

    expect(result).toBeTruthy();
    expect(generator).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual(viewCustomerProfileSuccess());
    generator.mockClear();
  });
  it("failure triggers error action", () => {
    const generator = jest
      .spyOn(api, "viewCustomerProfileService")
      .mockImplementation(() => Promise.reject());
    const dispatched = {
      payload: undefined,
      type: "COLLECTOR_CUSTOMERPROFILE_ERROR",
    };
    const result = runSaga(
      {
        dispatch: (action) => Object.assign(dispatched, action),
      },
      viewCustomerProfileSaga
    );

    expect(result).toBeTruthy();

    expect(generator).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual(viewCustomerProfileError());
    generator.mockClear();
  });
});
