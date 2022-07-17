/* eslint-disable no-undef */
import {takeLatest} from "redux-saga/effects";
import {runSaga} from "redux-saga";

import * as api from "../../../service/collector/collectorMyDrivesStatusService/collectorMyDrivesStatusService";
import {
  collectorMyDrivesStatusSaga,
  watchCollectorMyDrivesStatus,
} from "./collectorMyDrivesStatusSaga";
import {
  collectorMyDrivesStatusError,
  collectorMyDrivesStatusSuccess,
} from "../../../action/collector/collectorMyDrivesStatusAction/collectorMyDrivesStatusAction";

describe("watchCollectorMyDrivesStatus", () => {
  const genObject = watchCollectorMyDrivesStatus();
  it("should wait", () => {
    expect(genObject.next().value).toEqual(
      takeLatest(
        "COLLECTOR_MYDRIVES_STATUS_REQUEST",
        collectorMyDrivesStatusSaga
      )
    );
  });
  it("should be done on next iteration", () => {
    expect(genObject.next().done).toBeTruthy();
  });
});

describe("test collectorMyDrivesStatusSaga", () => {
  it("success triggers success action", () => {
    const data = {status: "Completed"};
    const generator = jest
      .spyOn(api, "collectorMyDrivesStatusService")
      .mockImplementation(() => Promise.resolve(data));
    const dispatched = {
      payload: undefined,
      type: "COLLECTOR_MYDRIVES_STATUS_SUCCESS",
    };
    const result = runSaga(
      {
        dispatch: (action) => Object.assign(dispatched, action),
      },
      collectorMyDrivesStatusSaga
    );

    expect(result).toBeTruthy();
    expect(generator).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual(collectorMyDrivesStatusSuccess());
    generator.mockClear();
  });
  it("failure triggers error action", () => {
    const generator = jest
      .spyOn(api, "collectorMyDrivesStatusService")
      .mockImplementation(() => Promise.reject());
    const dispatched = {
      payload: undefined,
      type: "COLLECTOR_MYDRIVES_STATUS_ERROR",
    };
    const result = runSaga(
      {
        dispatch: (action) => Object.assign(dispatched, action),
      },
      collectorMyDrivesStatusSaga
    );
    expect(result).toBeTruthy();
    expect(generator).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual(collectorMyDrivesStatusError());
    generator.mockClear();
  });
});
