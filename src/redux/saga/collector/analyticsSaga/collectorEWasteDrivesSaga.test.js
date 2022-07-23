/* eslint-disable no-undef */
import {takeLatest} from "redux-saga/effects";
import {
  collectorEWasteDrivesSaga,
  watchCollectorEWasteDrives,
} from "./collectorEWasteDrivesSaga";
import * as actions from "../../../action/collector/analyticsAction/collectorEWasteDrivesAction";
import {runSaga} from "redux-saga";
import * as api from "../../../../services/collector/analyticsService/collectorEWasteDrivesService";

describe("watchCollectorEWasteDrives", () => {
  const genObject = watchCollectorEWasteDrives();
  it("should wait", () => {
    expect(genObject.next().value).toEqual(
      takeLatest("COLLECTOR_EWASTE_DRIVES_REQUEST", collectorEWasteDrivesSaga)
    );
  });
  it("should be done on next iteration", () => {
    expect(genObject.next().done).toBeTruthy();
  });
});
describe("test collectorEWasteDrivesSaga", () => {
  it("should call api and dispatch success action", async () => {
    const eWasteDrives = jest
      .spyOn(api, "collectorEWasteDrivesService")
      .mockImplementation(() => Promise.resolve());
    const dispatched = {
      payload: undefined,
      type: "COLLECTOR_EWASTE_DRIVES_SUCCESS",
    };
    const result = runSaga(
      {
        dispatch: (action) => Object.assign(dispatched, action),
      },
      collectorEWasteDrivesSaga
    );
    expect(result).toBeTruthy();
    expect(eWasteDrives).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual(actions.collectorEWasteDrivesSuccess());
    eWasteDrives.mockClear();
  });
  it("failure triggers error action", async () => {
    const eWasteDrives = jest
      .spyOn(api, "collectorEWasteDrivesService")
      .mockImplementation(() => Promise.reject());
    const dispatched = {
      payload: undefined,
      type: "COLLECTOR_EWASTE_DRIVES_ERROR",
    };
    const result = runSaga(
      {
        dispatch: (action) => Object.assign(dispatched, action),
      },
      collectorEWasteDrivesSaga
    );
    expect(result).toBeTruthy();
    expect(eWasteDrives).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual(actions.collectorEWasteDrivesError());
    eWasteDrives.mockClear();
  });
});
