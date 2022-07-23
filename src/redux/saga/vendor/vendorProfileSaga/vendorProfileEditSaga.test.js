/* eslint-disable no-undef */
import {takeLatest} from "redux-saga/effects";
import {runSaga} from "redux-saga";
import * as api from "../../../../services/vendor/vendorProfileService/vendorProfileEditService";
import {
  watchVendorProfileEdit,
  vendorProfileEditSaga,
} from "./vendorProfileEditSaga";
import {
  vendorProfileEditError,
  vendorProfileEditSuccess,
} from "../../../action/vendor/vendorProfileAction/vendorProfileEditAction";

describe("watchVendorProfileEdit", () => {
  const genObject = watchVendorProfileEdit();
  it("should wait", () => {
    expect(genObject.next().value).toEqual(
      takeLatest("VENDOR_PROFILE_EDIT_REQUEST", vendorProfileEditSaga)
    );
  });
  it("should be done on next iteration", () => {
    expect(genObject.next().done).toBeTruthy();
  });
});
describe("test vendorProfileEditSaga", () => {
  it("should call api and dispatch success action", async () => {
    const data = {firstName: "aman"};
    const generator = jest
      .spyOn(api, "vendorProfileEditService")
      .mockImplementation(() => Promise.resolve(data));
    const dispatched = {
      payload: undefined,
      type: "VENDOR_PROFILE_EDIT_SUCCESS",
    };
    const result = runSaga(
      {
        dispatch: (action) => Object.assign(dispatched, action),
      },
      vendorProfileEditSaga
    );
    expect(result).toBeTruthy();
    expect(generator).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual(vendorProfileEditSuccess());
    generator.mockClear();
  });
  it("failure triggers error action", () => {
    const generator = jest
      .spyOn(api, "vendorProfileEditService")
      .mockImplementation(() => Promise.reject());
    const dispatched = {
      payload: undefined,
      type: "VENDOR_PROFILE_EDIT_ERROR",
    };
    const result = runSaga(
      {
        dispatch: (action) => Object.assign(dispatched, action),
      },
      vendorProfileEditSaga
    );
    expect(result).toBeTruthy();
    expect(generator).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual(vendorProfileEditError());
    generator.mockClear();
  });
});
