/* eslint-disable no-undef */
import {takeLatest} from "redux-saga/effects";
import {runSaga} from "redux-saga";
import * as api from "../../../../services/collector/collectorNotificationService/collectorNotificationCountService";
import {
  collectorNotificationCountSaga,
  watchCollectorNotificationCount,
} from "./collectorNotificationCountSaga";
import {
  collectorNotificationCountError,
  collectorNotificationCountSuccess,
} from "../../../action/collector/collectorNotificationAction/collectorNotificationCountAction";

describe("watchCollectorNotificationCount", () => {
  const genObject = watchCollectorNotificationCount();
  it("should wait", () => {
    expect(genObject.next().value).toEqual(
      takeLatest(
        "COLLECTOR_NOTIFICATION_COUNT_REQUEST",
        collectorNotificationCountSaga
      )
    );
  });
  it("should be done on next iteration", () => {
    expect(genObject.next().done).toBeTruthy();
  });
});

describe("test collectorNotificationCount", () => {
  it("success triggers success action", () => {
    const generator = jest
      .spyOn(api, "collectorNotificationCountService")
      .mockImplementation(() => Promise.resolve());
    const dispatched = {
      payload: undefined,
      type: "COLLECTOR_NOTIFICATION_COUNT_SUCCESS",
    };
    const result = runSaga(
      {
        dispatch: (action) => Object.assign(dispatched, action),
      },
      collectorNotificationCountSaga
    );
    expect(result).toBeTruthy();
    expect(generator).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual(collectorNotificationCountSuccess());
    generator.mockClear();
  });
  it("failure triggers error action", () => {
    const generator = jest
      .spyOn(api, "collectorNotificationCountService")
      .mockImplementation(() => Promise.reject());
    const dispatched = {
      payload: undefined,
      type: "COLLECTOR_NOTIFICATION_COUNT_ERROR",
    };
    const result = runSaga(
      {
        dispatch: (action) => Object.assign(dispatched, action),
      },
      collectorNotificationCountSaga
    );
    expect(result).toBeTruthy();
    expect(generator).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual(collectorNotificationCountError());
    generator.mockClear();
  });
});
