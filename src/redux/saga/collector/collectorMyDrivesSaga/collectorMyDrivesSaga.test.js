/* eslint-disable no-undef */
import {takeLatest} from "redux-saga/effects";
import {runSaga} from "redux-saga";

import * as api from "../../../service/collector/collectorMyDrivesService/collectorMyDrivesService";
import {
  watchCollectorMyDrives,
  collectorMyDrivesSaga,
} from "./collectorMyDrivesSaga";
import {
  collectorMyDrivesError,
  collectorMyDrivesSuccess,
} from "../../../action/collector/collectorMyDrivesAction/collectorMyDrivesAction";

describe("watchCollectorMyDrives", () => {
  const genObject = watchCollectorMyDrives();
  it("should wait", () => {
    expect(genObject.next().value).toEqual(
      takeLatest("COLLECTOR_MYDRIVES_REQUEST", collectorMyDrivesSaga)
    );
  });
  it("should be done on next iteration", () => {
    expect(genObject.next().done).toBeTruthy();
  });
});

describe("test collectorMyDrivesSaga", () => {
  it("success triggers success action", () => {
    const generator = jest
      .spyOn(api, "collectorMyDrivesService")
      .mockImplementation(() => Promise.resolve());
    const dispatched = {
      payload: undefined,
      type: "COLLECTOR_MYDRIVES_SUCCESS",
    };
    const result = runSaga(
      {
        dispatch: (action) => Object.assign(dispatched, action),
      },
      collectorMyDrivesSaga
    );

    expect(result).toBeTruthy();
    expect(generator).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual(collectorMyDrivesSuccess());
    generator.mockClear();
  });
  it("failure triggers error action", () => {
    const generator = jest
      .spyOn(api, "collectorMyDrivesService")
      .mockImplementation(() => Promise.reject());
    const dispatched = {
      payload: undefined,
      type: "COLLECTOR_MYDRIVES_ERROR",
    };
    const result = runSaga(
      {
        dispatch: (action) => Object.assign(dispatched, action),
      },
      collectorMyDrivesSaga
    );
    expect(result).toBeTruthy();
    expect(generator).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual(collectorMyDrivesError());
    generator.mockClear();
  });
});
