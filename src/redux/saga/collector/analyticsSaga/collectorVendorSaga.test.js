/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import {call, put, takeLatest} from "redux-saga/effects";
import {runSaga} from "redux-saga";
import {
  collectorVendorError,
  collectorVendorSuccess,
} from "../../../action/collector/analyticsAction/collectorVendorAction";
import * as api from "../../../service/collector/analyticsService/collectorVendorService";
import {collectorVendorSaga, watchCollectorVendor} from "./collectorVendorSaga";

describe("watchCollectorVendor", () => {
  const genObject = watchCollectorVendor();
  it("should wait", () => {
    expect(genObject.next().value).toEqual(
      takeLatest("COLLECTOR_VENDOR_REQUEST", collectorVendorSaga)
    );
  });
  it("should be done on next iteration", () => {
    expect(genObject.next().done).toBeTruthy();
  });
});

describe("test collectorVendorSaga", () => {
  it("success triggers success action", () => {
    const generator = jest
      .spyOn(api, "collectorVendorService")
      .mockImplementation(() => Promise.resolve());
    const dispatched = {
      payload: undefined,
      type: "COLLECTOR_VENDOR_SUCCESS",
    };
    const result = runSaga(
      {
        dispatch: (action) => Object.assign(dispatched, action),
      },
      collectorVendorSaga
    );

    expect(result).toBeTruthy();
    expect(generator).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual(collectorVendorSuccess());
    generator.mockClear();
  });
  it("failure triggers error action", () => {
    const generator = jest
      .spyOn(api, "collectorVendorService")
      .mockImplementation(() => Promise.reject());
    const dispatched = {
      payload: undefined,
      type: "COLLECTOR_VENDOR_ERROR",
    };
    const result = runSaga(
      {
        dispatch: (action) => Object.assign(dispatched, action),
      },
      collectorVendorSaga
    );

    expect(result).toBeTruthy();
    expect(generator).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual(collectorVendorError());
    generator.mockClear();
  });
});
