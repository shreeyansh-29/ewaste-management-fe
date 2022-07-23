/* eslint-disable no-undef */
import {takeLatest} from "redux-saga/effects";
import {runSaga} from "redux-saga";
import * as api from "../../../../services/customer/analyticsService/customerDrivesService";
import {customerDrivesSaga, watchCustomerDrives} from "./customerDrivesSaga";
import {
  customerDrivesError,
  customerDrivesSuccess,
} from "../../../action/customer/analyticsAction/customerDrivesAction";

describe("watchCustomerDrives", () => {
  const genObject = watchCustomerDrives();
  it("should wait", () => {
    expect(genObject.next().value).toEqual(
      takeLatest("CUSTOMER_DRIVES_REQUEST", customerDrivesSaga)
    );
  });
  it("should be done on next iteration", () => {
    expect(genObject.next().done).toBeTruthy();
  });
});
describe("test customerDrivesSaga", () => {
  it("should call api and dispatch success action", async () => {
    const drives = jest
      .spyOn(api, "customerDrivesService")
      .mockImplementation(() => Promise.resolve());
    const dispatched = {
      payload: undefined,
      type: "CUSTOMER_DRIVES_SUCCESS",
    };
    const result = runSaga(
      {
        dispatch: (action) => Object.assign(dispatched, action),
      },
      customerDrivesSaga
    );
    expect(result).toBeTruthy();
    expect(drives).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual(customerDrivesSuccess());
    drives.mockClear();
  });
  it("failure triggers error action", () => {
    const drives = jest
      .spyOn(api, "customerDrivesService")
      .mockImplementation(() => Promise.reject());
    const dispatched = {
      payload: undefined,
      type: "CUSTOMER_DRIVES_ERROR",
    };
    const result = runSaga(
      {
        dispatch: (action) => Object.assign(dispatched, action),
      },
      customerDrivesSaga
    );
    expect(result).toBeTruthy();
    expect(drives).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual(customerDrivesError());
    drives.mockClear();
  });
});
