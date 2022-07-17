/* eslint-disable no-undef */
import {takeLatest} from "redux-saga/effects";
import {runSaga} from "redux-saga";
import {
  collectorAvailableError,
  collectorAvailableSuccess,
} from "../../../action/collector/collectorAvailableAction/collectorAvailableAction";
import * as api from "../../../service/collector/collectorAvailableService/collectorAvailableService";
import {
  collectorAvailableSaga,
  watchCollectorAvailable,
} from "./collectorAvailableSaga";

describe("watchCollectorAvailable", () => {
  const genObject = watchCollectorAvailable();
  it("should wait", () => {
    expect(genObject.next().value).toEqual(
      takeLatest("COLLECTOR_AVAILABLE_REQUEST", collectorAvailableSaga)
    );
  });
  it("should be done on next iteration", () => {
    expect(genObject.next().done).toBeTruthy();
  });
});

describe("test collectorAvailableSaga", () => {
  it("success triggers success action", () => {
    const generator = jest
      .spyOn(api, "collectorAvailableService")
      .mockImplementation(() => Promise.resolve());
    const dispatched = {
      payload: undefined,
      type: "COLLECTOR_AVAILABLE_SUCCESS",
    };
    const result = runSaga(
      {
        dispatch: (action) => Object.assign(dispatched, action),
      },
      collectorAvailableSaga
    );

    expect(result).toBeTruthy();
    expect(generator).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual(collectorAvailableSuccess());
    generator.mockClear();
  });
  it("failure triggers error action", () => {
    const generator = jest
      .spyOn(api, "collectorAvailableService")
      .mockImplementation(() => Promise.reject());
    const dispatched = {
      payload: undefined,
      type: "COLLECTOR_AVAILABLE_ERROR",
    };
    const result = runSaga(
      {
        dispatch: (action) => Object.assign(dispatched, action),
      },
      collectorAvailableSaga
    );
    expect(result).toBeTruthy();
    expect(generator).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual(collectorAvailableError());
    generator.mockClear();
  });
});
