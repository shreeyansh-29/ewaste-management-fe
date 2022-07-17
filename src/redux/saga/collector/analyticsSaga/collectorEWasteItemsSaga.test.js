/* eslint-disable no-undef */
// import {runSaga} from "redux-saga";
import {takeLatest} from "redux-saga/effects";
import {runSaga} from "redux-saga";
import {
  collectorEWasteItemsError,
  collectorEWasteItemsSuccess,
} from "../../../action/collector/analyticsAction/collectorEWasteItemsAction";
import * as api from "../../../service/collector/analyticsService/collectorEWasteItemsService";
import {
  collectorEWasteItemsSaga,
  watchCollectorEWasteItems,
} from "./collectorEWasteItemsSaga";

describe("watchCollectorEWasteItems", () => {
  const genObject = watchCollectorEWasteItems();
  it("should wait", () => {
    expect(genObject.next().value).toEqual(
      takeLatest("COLLECTOR_EWASTE_ITEMS_REQUEST", collectorEWasteItemsSaga)
    );
  });
  it("should be done on next iteration", () => {
    expect(genObject.next().done).toBeTruthy();
  });
});

describe("test collectorEWasteItemsSaga", () => {
  it("success triggers success action", () => {
    const generator = jest
      .spyOn(api, "collectorEWasteItemsService")
      .mockImplementation(() => Promise.resolve());
    const dispatched = {
      payload: undefined,
      type: "COLLECTOR_EWASTE_ITEMS_SUCCESS",
    };
    const result = runSaga(
      {
        dispatch: (action) => Object.assign(dispatched, action),
      },
      collectorEWasteItemsSaga
    );

    expect(result).toBeTruthy();
    expect(generator).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual(collectorEWasteItemsSuccess());
    generator.mockClear();
  });
  it("failure triggers failure action", () => {
    const generator = jest
      .spyOn(api, "collectorEWasteItemsService")
      .mockImplementation(() => Promise.reject());
    const dispatched = {
      payload: undefined,
      type: "COLLECTOR_EWASTE_ITEMS_ERROR",
    };
    const result = runSaga(
      {
        dispatch: (action) => Object.assign(dispatched, action),
      },
      collectorEWasteItemsSaga
    );

    expect(result).toBeTruthy();
    expect(generator).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual(collectorEWasteItemsError());
    generator.mockClear();
  });
});
