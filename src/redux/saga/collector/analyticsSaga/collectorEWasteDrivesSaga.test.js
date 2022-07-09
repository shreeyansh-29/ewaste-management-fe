/* eslint-disable no-undef */
import {takeLatest} from "redux-saga/effects";
import {
  collectorEWasteDrivesSaga,
  watchCollectorEWasteDrives,
} from "./collectorEWasteDrivesSaga";
import * as actions from "../../../action/collector/analyticsAction/collectorEWasteDrivesAction";
import {collectorEWasteDrivesService} from "../../../service/collector/analyticsService/collectorEWasteDrivesService";
import {runSaga} from "redux-saga";
import * as service from "../../../service/collector/analyticsService/collectorEWasteDrivesService";

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
    let dummyData = {EWasteDriveCity: 1, EWasteDriveCollector: 1};
    const getEWasteDrives = jest.fn(() => collectorEWasteDrivesService);
    //   .spyOn(service, collectorEWasteDrivesService)
    //   .mockImplementation(() => Promise.resolve(dummyData));
    let dispatche;
    const dispatched = [
      {
        type: "COLLECTOR_EWASTE_DRIVES_SUCCESS",
        payload: {EWasteDriveCity: 1, EWasteDriveCollector: 1},
      },
    ];
    const result = await runSaga(
      {
        dispatch: (action) => dispatche.push(action),
      },
      collectorEWasteDrivesSaga
    );
    console.log(result);
    expect(getEWasteDrives).toHaveBeenCalledTimes(0);
    expect(dispatched).toEqual([
      actions.collectorEWasteDrivesSuccess(dummyData),
    ]);
    getEWasteDrives.mockClear();
  });
});
