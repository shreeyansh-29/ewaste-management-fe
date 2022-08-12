/* eslint-disable no-undef */
import {takeLatest} from "redux-saga/effects";
import {runSaga} from "redux-saga";
import * as api from "../../../../services/collector/collectorPendingAcceptService/collectorPendingAcceptService";
import {
  collectorPendingAcceptSaga,
  watchCollectorPendingAccept,
} from "./collectorPendingAcceptSaga";
import {
  collectorPendingAcceptError,
  collectorPendingAcceptSuccess,
} from "../../../action/collector/collectorPendingAcceptAction/collectorPendingAcceptAction";

describe("watchCollectorOrganizeDrive", () => {
  const genObject = watchCollectorPendingAccept();
  it("should wait", () => {
    expect(genObject.next().value).toEqual(
      takeLatest("COLLECTOR_PENDING_ACCEPT_REQUEST", collectorPendingAcceptSaga)
    );
  });
  it("should be done on next iteration", () => {
    expect(genObject.next().done).toBeTruthy();
  });
});

describe("test collectorPendingAcceptSaga", () => {
  it("success triggers success action", async () => {
    const data = {itemName: "AC", quantity: 9};
    const generator = jest
      .spyOn(api, "collectorPendingAcceptService")
      .mockImplementation(() => Promise.resolve(data));
    const dispatched = {
      payload: undefined,
      type: "COLLECTOR_PENDING_ACCEPT_SUCCESS",
    };
    const result = runSaga(
      {
        dispatch: (action) => Object.assign(dispatched, action),
      },
      collectorPendingAcceptSaga
    );

    expect(result).toBeTruthy();
    expect(generator).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual(collectorPendingAcceptSuccess());
    generator.mockClear();
  });
  it("failure triggers error action", () => {
    const generator = jest
      .spyOn(api, "collectorPendingAcceptService")
      .mockImplementation(() => Promise.reject());
    const dispatched = {
      payload: undefined,
      type: "COLLECTOR_PENDING_ACCEPT_ERROR",
    };
    const result = runSaga(
      {
        dispatch: (action) => Object.assign(dispatched, action),
      },
      collectorPendingAcceptSaga
    );

    expect(result).toBeTruthy();
    expect(generator).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual(collectorPendingAcceptError());
    generator.mockClear();
  });
});
