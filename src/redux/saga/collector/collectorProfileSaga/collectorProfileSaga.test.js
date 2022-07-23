/* eslint-disable no-undef */
import {takeLatest} from "redux-saga/effects";
import {runSaga} from "redux-saga";
import * as api from "../../../../services/collector/collectorProfileService/collectorProfileService";
import {
  collectorProfileSaga,
  watchCollectorProfile,
} from "./collectorProfileSaga";
import {
  collectorProfileError,
  collectorProfileSuccess,
} from "../../../action/collector/collectorProfileAction/collectorProfileAction";

describe("watchCollectorProfile", () => {
  const genObject = watchCollectorProfile();
  it("should wait", () => {
    expect(genObject.next().value).toEqual(
      takeLatest("COLLECTOR_PROFILE_REQUEST", collectorProfileSaga)
    );
  });
  it("should be done on next iteration", () => {
    expect(genObject.next().done).toBeTruthy();
  });
});

describe("test collectorProfileSaga", () => {
  it("success triggers success action", () => {
    const generator = jest
      .spyOn(api, "collectorProfileService")
      .mockImplementation(() => Promise.resolve());
    const dispatched = {
      payload: undefined,
      type: "COLLECTOR_PROFILE_SUCCESS",
    };
    const result = runSaga(
      {
        dispatch: (action) => Object.assign(dispatched, action),
      },
      collectorProfileSaga
    );

    expect(result).toBeTruthy();
    expect(generator).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual(collectorProfileSuccess());
    generator.mockClear();
  });
  it("failure triggers error action", () => {
    const generator = jest
      .spyOn(api, "collectorProfileService")
      .mockImplementation(() => Promise.reject());
    const dispatched = {
      payload: undefined,
      type: "COLLECTOR_PROFILE_ERROR",
    };
    const result = runSaga(
      {
        dispatch: (action) => Object.assign(dispatched, action),
      },
      collectorProfileSaga
    );

    expect(result).toBeTruthy();
    expect(generator).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual(collectorProfileError());
    generator.mockClear();
  });
});
