/* eslint-disable no-undef */
import {takeLatest} from "redux-saga/effects";
import {runSaga} from "redux-saga";
import * as api from "../../../../services/collector/collectorNotificationService/collectorNotificationDataService";
import {
  collectorNotificationDataSaga,
  watchCollectorNotificationData,
} from "./collectorNotificationDataSaga";
import {
  collectorNotificationDataError,
  collectorNotificationDataSuccess,
} from "../../../action/collector/collectorNotificationAction/collectorNotificationDataAction";

describe("watchCollectorNotificationCount", () => {
  const genObject = watchCollectorNotificationData();
  it("should wait", () => {
    expect(genObject.next().value).toEqual(
      takeLatest(
        "COLLECTOR_NOTIFICATION_DATA_REQUEST",
        collectorNotificationDataSaga
      )
    );
  });
  it("should be done on next iteration", () => {
    expect(genObject.next().done).toBeTruthy();
  });
});

describe("test collectorNotificationData", () => {
  it("success triggers success action", async () => {
    const generator = jest
      .spyOn(api, "collectorNotificationDataService")
      .mockImplementation(() => Promise.resolve());
    const dispatched = {
      payload: undefined,
      type: "COLLECTOR_NOTIFICATION_DATA_SUCCESS",
    };
    const result = runSaga(
      {
        dispatch: (action) => Object.assign(dispatched, action),
      },
      collectorNotificationDataSaga
    );

    expect(result).toBeTruthy();
    expect(generator).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual(collectorNotificationDataSuccess());
    generator.mockClear();
  });
  it("failure triggers error action", () => {
    const generator = jest
      .spyOn(api, "collectorNotificationDataService")
      .mockImplementation(() => Promise.reject());
    const dispatched = {
      payload: undefined,
      type: "COLLECTOR_NOTIFICATION_DATA_ERROR",
    };
    const result = runSaga(
      {
        dispatch: (action) => Object.assign(dispatched, action),
      },
      collectorNotificationDataSaga
    );
    expect(result).toBeTruthy();
    expect(generator).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual(collectorNotificationDataError());
    generator.mockClear();
  });
});
