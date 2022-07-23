/* eslint-disable no-undef */
import {takeLatest} from "redux-saga/effects";
import {runSaga} from "redux-saga";
import * as api from "../../../../services/vendor/analyicsService/vendorVendorDataService";
import {
  watchVendorVendorData,
  vendorVendorDataSaga,
} from "./vendorVendorDataSaga";
import {
  vendorVendorDataError,
  vendorVendorDataSuccess,
} from "../../../action/vendor/analyticsAction/vendorVendorDataAction";

describe("watchVendorVendorData", () => {
  const genObject = watchVendorVendorData();
  it("should wait", () => {
    expect(genObject.next().value).toEqual(
      takeLatest("VENDOR_VENDOR_DATA_REQUEST", vendorVendorDataSaga)
    );
  });
  it("should be done on next iteration", () => {
    expect(genObject.next().done).toBeTruthy();
  });
});
describe("test vendorVendorDataSaga", () => {
  it("should call api and dispatch success action", async () => {
    const generator = jest
      .spyOn(api, "vendorVendorDataService")
      .mockImplementation(() => Promise.resolve());
    const dispatched = {
      payload: undefined,
      type: "VENDOR_VENDOR_DATA_SUCCESS",
    };
    const result = runSaga(
      {
        dispatch: (action) => Object.assign(dispatched, action),
      },
      vendorVendorDataSaga
    );
    expect(result).toBeTruthy();
    expect(generator).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual(vendorVendorDataSuccess());
    generator.mockClear();
  });
  it("failure triggers error action", () => {
    const generator = jest
      .spyOn(api, "vendorVendorDataService")
      .mockImplementation(() => Promise.reject());
    const dispatched = {
      payload: undefined,
      type: "VENDOR_VENDOR_DATA_ERROR",
    };
    const result = runSaga(
      {
        dispatch: (action) => Object.assign(dispatched, action),
      },
      vendorVendorDataSaga
    );
    expect(result).toBeTruthy();
    expect(generator).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual(vendorVendorDataError());
    generator.mockClear();
  });
});
