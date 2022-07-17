/* eslint-disable no-undef */
import {takeLatest} from "redux-saga/effects";
import {runSaga} from "redux-saga";
import * as api from "../../../service/vendor/vendorNameService/vendorNameService";
import {watchVendorName, vendorNameSaga} from "./vendorNameSaga";
import {
  vendorNameError,
  vendorNameSuccess,
} from "../../../action/vendor/vendorNameAction/vendorNameAction";

describe("watchVendorName", () => {
  const genObject = watchVendorName();
  it("should wait", () => {
    expect(genObject.next().value).toEqual(
      takeLatest("VENDOR_NAME_REQUEST", vendorNameSaga)
    );
  });
  it("should be done on next iteration", () => {
    expect(genObject.next().done).toBeTruthy();
  });
});
describe("test vendorNameSaga", () => {
  it("should call api and dispatch success action", async () => {
    const generator = jest
      .spyOn(api, "vendorNameService")
      .mockImplementation(() => Promise.resolve());
    const dispatched = {
      payload: undefined,
      type: "VENDOR_NAME_SUCCESS",
    };
    const result = runSaga(
      {
        dispatch: (action) => Object.assign(dispatched, action),
      },
      vendorNameSaga
    );
    expect(result).toBeTruthy();
    expect(generator).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual(vendorNameSuccess());
    generator.mockClear();
  });
  it("failure triggers error action", () => {
    const generator = jest
      .spyOn(api, "vendorNameService")
      .mockImplementation(() => Promise.reject());
    const dispatched = {
      payload: undefined,
      type: "VENDOR_NAME_ERROR",
    };
    const result = runSaga(
      {
        dispatch: (action) => Object.assign(dispatched, action),
      },
      vendorNameSaga
    );
    expect(result).toBeTruthy();
    expect(generator).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual(vendorNameError());
    generator.mockClear();
  });
});
