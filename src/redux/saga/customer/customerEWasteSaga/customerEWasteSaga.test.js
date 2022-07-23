/* eslint-disable no-undef */
import {takeLatest} from "redux-saga/effects";
import {runSaga} from "redux-saga";
import * as api from "../../../../services/customer/customerEWasteService/customerEWasteService";
import {
  customerEWasteDrivesError,
  customerEWasteDrivesSuccess,
} from "../../../action/customer/customerEWasteAction/customerEWasteAction";
import {customerEWasteSaga, watchCustomerEWaste} from "./customerEWasteSaga";

describe("watchCustomerEwasteDrives", () => {
  const genObject = watchCustomerEWaste();
  it("should wait", () => {
    expect(genObject.next().value).toEqual(
      takeLatest("CUSTOMER_EWASTE_DRIVES_REQUEST", customerEWasteSaga)
    );
  });
  it("should be done on next iteration", () => {
    expect(genObject.next().done).toBeTruthy();
  });
});
describe("test customerEWasteSaga", () => {
  it("should call api and dispatch success action", async () => {
    const eWaste = jest
      .spyOn(api, "customerEWasteService")
      .mockImplementation(() => Promise.resolve());
    const dispatched = {
      payload: undefined,
      type: "CUSTOMER_EWASTE_DRIVES_SUCCESS",
    };
    const result = runSaga(
      {
        dispatch: (action) => Object.assign(dispatched, action),
      },
      customerEWasteSaga
    );
    expect(result).toBeTruthy();
    expect(eWaste).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual(customerEWasteDrivesSuccess());
    eWaste.mockClear();
  });
  it("failure triggers error action", () => {
    const eWaste = jest
      .spyOn(api, "customerEWasteService")
      .mockImplementation(() => Promise.reject());
    const dispatched = {
      payload: undefined,
      type: "CUSTOMER_EWASTE_DRIVES_ERROR",
    };
    const result = runSaga(
      {
        dispatch: (action) => Object.assign(dispatched, action),
      },
      customerEWasteSaga
    );
    expect(result).toBeTruthy();
    expect(eWaste).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual(customerEWasteDrivesError());
    eWaste.mockClear();
  });
});
