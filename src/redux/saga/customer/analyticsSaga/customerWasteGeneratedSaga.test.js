/* eslint-disable no-undef */
import {takeLatest} from "redux-saga/effects";
import {runSaga} from "redux-saga";
import * as api from "../../../../services/customer/analyticsService/customerWasteGeneratedService";
import {
  customerWasteGeneratedSaga,
  watchCustomerWasteGenerated,
} from "./customerWasteGeneratedSaga";
import {
  customerWasteGeneratedError,
  customerWasteGeneratedSuccess,
} from "../../../action/customer/analyticsAction/customerWasteGeneratedAction";

describe("watchCustomerWasteGenerated", () => {
  const genObject = watchCustomerWasteGenerated();
  it("should wait", () => {
    expect(genObject.next().value).toEqual(
      takeLatest("CUSTOMER_WASTEGENERATED_REQUEST", customerWasteGeneratedSaga)
    );
  });
  it("should be done on next iteration", () => {
    expect(genObject.next().done).toBeTruthy();
  });
});
describe("test customerWasteGeneratedSaga", () => {
  it("should call api and dispatch success action", async () => {
    const wasteGenerated = jest
      .spyOn(api, "customerWasteGeneratedService")
      .mockImplementation(() => Promise.resolve());
    const dispatched = {
      payload: undefined,
      type: "CUSTOMER_WASTEGENERATED_SUCCESS",
    };
    const result = runSaga(
      {
        dispatch: (action) => Object.assign(dispatched, action),
      },
      customerWasteGeneratedSaga
    );
    expect(result).toBeTruthy();
    expect(wasteGenerated).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual(customerWasteGeneratedSuccess());
    wasteGenerated.mockClear();
  });
  it("failure triggers error action", () => {
    const wasteGenerated = jest
      .spyOn(api, "customerWasteGeneratedService")
      .mockImplementation(() => Promise.reject());
    const dispatched = {
      payload: undefined,
      type: "CUSTOMER_WASTEGENERATED_ERROR",
    };
    const result = runSaga(
      {
        dispatch: (action) => Object.assign(dispatched, action),
      },
      customerWasteGeneratedSaga
    );
    expect(result).toBeTruthy();
    expect(wasteGenerated).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual(customerWasteGeneratedError());
    wasteGenerated.mockClear();
  });
});
