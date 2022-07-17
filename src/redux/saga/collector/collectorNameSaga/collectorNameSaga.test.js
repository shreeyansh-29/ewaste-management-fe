/* eslint-disable no-undef */
import {takeLatest} from "redux-saga/effects";
import {runSaga} from "redux-saga";
import * as api from "../../../service/collector/collectorNameService/collectorNameService";
import {collectorNameSaga, watchCollectorName} from "./collectorNameSaga";
import {
  collectorNameError,
  collectorNameSuccess,
} from "../../../action/collector/collectorNameAction/collectorNameAction";

describe("watchCollectorMyDrives", () => {
  const genObject = watchCollectorName();
  it("should wait", () => {
    expect(genObject.next().value).toEqual(
      takeLatest("COLLECTOR_NAME_REQUEST", collectorNameSaga)
    );
  });
  it("should be done on next iteration", () => {
    expect(genObject.next().done).toBeTruthy();
  });
});

describe("test collectorNameSaga", () => {
  it("success triggers success action", () => {
    const generator = jest
      .spyOn(api, "collectorNameService")
      .mockImplementation(() => Promise.resolve());
    const dispatched = {
      payload: undefined,
      type: "COLLECTOR_NAME_SUCCESS",
    };
    const result = runSaga(
      {
        dispatch: (action) => Object.assign(dispatched, action),
      },
      collectorNameSaga
    );

    expect(result).toBeTruthy();
    expect(generator).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual(collectorNameSuccess());
    generator.mockClear();
  });
  it("failure triggers error action", () => {
    const generator = jest
      .spyOn(api, "collectorNameService")
      .mockImplementation(() => Promise.reject());
    const dispatched = {
      payload: undefined,
      type: "COLLECTOR_NAME_ERROR",
    };
    const result = runSaga(
      {
        dispatch: (action) => Object.assign(dispatched, action),
      },
      collectorNameSaga
    );
    expect(result).toBeTruthy();
    expect(generator).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual(collectorNameError());
    generator.mockClear();
  });
});
