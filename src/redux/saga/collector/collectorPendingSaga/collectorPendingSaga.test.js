/* eslint-disable no-undef */
import {takeLatest} from "redux-saga/effects";
import {runSaga} from "redux-saga";
import * as api from "../../../../services/collector/collectorPendingService/collectorPendingService";
import {
  collectorPendingSaga,
  watchCollectorPending,
} from "./collectorPendingSaga";
import {
  collectorPendingError,
  collectorPendingSuccess,
} from "../../../action/collector/collectorPendingAction/collectorPendingAction";

describe("watchCollectorPending", () => {
  const genObject = watchCollectorPending();
  it("should wait", () => {
    expect(genObject.next().value).toEqual(
      takeLatest("COLLECTOR_PENDING_REQUEST", collectorPendingSaga)
    );
  });
  it("should be done on next iteration", () => {
    expect(genObject.next().done).toBeTruthy();
  });
});

describe("test collectorPendingSaga", () => {
  it("success triggers success action", () => {
    const generator = jest
      .spyOn(api, "collectorPendingService")
      .mockImplementation(() => Promise.resolve());
    const dispatched = {
      payload: undefined,
      type: "COLLECTOR_PENDING_SUCCESS",
    };
    const result = runSaga(
      {
        dispatch: (action) => Object.assign(dispatched, action),
      },
      collectorPendingSaga
    );

    expect(result).toBeTruthy();
    expect(generator).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual(collectorPendingSuccess());
    generator.mockClear();
  });
  it("failure triggers error action", () => {
    const generator = jest
      .spyOn(api, "collectorPendingService")
      .mockImplementation(() => Promise.reject());
    const dispatched = {
      payload: undefined,
      type: "COLLECTOR_PENDING_ERROR",
    };
    const result = runSaga(
      {
        dispatch: (action) => Object.assign(dispatched, action),
      },
      collectorPendingSaga
    );

    expect(result).toBeTruthy();
    expect(generator).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual(collectorPendingError());
    generator.mockClear();
  });
});
