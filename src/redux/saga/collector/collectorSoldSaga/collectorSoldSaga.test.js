/* eslint-disable no-undef */
import {takeLatest} from "redux-saga/effects";
import {runSaga} from "redux-saga";
import * as api from "../../../../services/collector/collectorSoldService/collectorSoldService";
import {collectorSoldSaga, watchCollectorSold} from "./collectorSoldSaga";
import {
  collectorSoldError,
  collectorSoldSuccess,
} from "../../../action/collector/collectorSoldAction/collectorSoldAction";

describe("watchCollectorSold", () => {
  const genObject = watchCollectorSold();
  it("should wait", () => {
    expect(genObject.next().value).toEqual(
      takeLatest("COLLECTOR_SOLD_REQUEST", collectorSoldSaga)
    );
  });
  it("should be done on next iteration", () => {
    expect(genObject.next().done).toBeTruthy();
  });
});

describe("test collectorSoldSaga", () => {
  it("success triggers success action", () => {
    const generator = jest
      .spyOn(api, "collectorSoldService")
      .mockImplementation(() => Promise.resolve());
    const dispatched = {
      payload: undefined,
      type: "COLLECTOR_SOLD_SUCCESS",
    };
    const result = runSaga(
      {
        dispatch: (action) => Object.assign(dispatched, action),
      },
      collectorSoldSaga
    );

    expect(result).toBeTruthy();
    expect(generator).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual(collectorSoldSuccess());
    generator.mockClear();
  });
  it("failure triggers error action", () => {
    const generator = jest
      .spyOn(api, "collectorSoldService")
      .mockImplementation(() => Promise.reject());
    const dispatched = {
      payload: undefined,
      type: "COLLECTOR_SOLD_ERROR",
    };
    const result = runSaga(
      {
        dispatch: (action) => Object.assign(dispatched, action),
      },
      collectorSoldSaga
    );

    expect(result).toBeTruthy();
    expect(generator).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual(collectorSoldError());
    generator.mockClear();
  });
});
