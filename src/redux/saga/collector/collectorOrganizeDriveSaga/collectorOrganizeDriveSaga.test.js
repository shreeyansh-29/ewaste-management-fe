/* eslint-disable no-undef */
import {takeLatest} from "redux-saga/effects";
import {runSaga} from "redux-saga";
import * as api from "../../../service/collector/collectorOrganizeDriveService/collectorOrganizeDriveService";
import {
  collectorOrganizeDriveSaga,
  watchCollectorOrganizeDrive,
} from "./collectorOrganizeDriveSaga";
import {
  collectorOrganizeDriveError,
  collectorOrganizeDriveSuccess,
} from "../../../action/collector/collectorOrganizeDriveAction/collectorOrganizeDriveAction";

describe("watchCollectorOrganizeDrive", () => {
  const genObject = watchCollectorOrganizeDrive();
  it("should wait", () => {
    expect(genObject.next().value).toEqual(
      takeLatest("COLLECTOR_ORGANIZE_REQUEST", collectorOrganizeDriveSaga)
    );
  });
  it("should be done on next iteration", () => {
    expect(genObject.next().done).toBeTruthy();
  });
});

describe("test collectorOrganizeDriveSaga", () => {
  it("success triggers success action", async () => {
    const data = {driveName: "GO GREEN", category: "Large,Equipments"};
    const generator = jest
      .spyOn(api, "collectorOrganizeDriveService")
      .mockImplementation(() => Promise.resolve(data));
    const dispatched = {
      payload: undefined,
      type: "COLLECTOR_ORGANIZE_SUCCESS",
    };
    const result = runSaga(
      {
        dispatch: (action) => Object.assign(dispatched, action),
      },
      collectorOrganizeDriveSaga
    );

    expect(result).toBeTruthy();
    expect(generator).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual(collectorOrganizeDriveSuccess());
    generator.mockClear();
  });
  it("failure triggers error action", () => {
    const generator = jest
      .spyOn(api, "collectorOrganizeDriveService")
      .mockImplementation(() => Promise.reject());
    const dispatched = {
      payload: undefined,
      type: "COLLECTOR_ORGANIZE_ERROR",
    };
    const result = runSaga(
      {
        dispatch: (action) => Object.assign(dispatched, action),
      },
      collectorOrganizeDriveSaga
    );
    expect(result).toBeTruthy();
    expect(generator).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual(collectorOrganizeDriveError());
    generator.mockClear();
  });
});
