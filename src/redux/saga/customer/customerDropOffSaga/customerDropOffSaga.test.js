/* eslint-disable no-undef */
import {takeLatest} from "redux-saga/effects";
import {runSaga} from "redux-saga";
import * as api from "../../../../services/customer/customerDropOffService/customerDropOffService";
import {customerDropOffSaga, watchCustomerDropOff} from "./customerDropOffSaga";
import {
  customerDropOffError,
  customerDropOffSuccess,
} from "../../../action/customer/customerDropOffAction/customerDropOffAction";

describe("watchCustomerDropOff", () => {
  const genObject = watchCustomerDropOff();
  it("should wait", () => {
    expect(genObject.next().value).toEqual(
      takeLatest("CUSTOMER_DROPOFF_REQUEST", customerDropOffSaga)
    );
  });
  it("should be done on next iteration", () => {
    expect(genObject.next().done).toBeTruthy();
  });
});
describe("test customerDropOffSaga", () => {
  it("should call api and dispatch success action", async () => {
    const action = undefined;
    const customerDropOff = jest
      .spyOn(api, "customerDropOffService")
      .mockImplementation(() => Promise.resolve(action));
    const dispatched = {
      payload: undefined,
      type: "CUSTOMER_DROPOFF_SUCCESS",
    };
    const result = runSaga(
      {
        dispatch: (action) => Object.assign(dispatched, action),
      },
      customerDropOffSaga
    );
    expect(result).toBeTruthy();
    expect(customerDropOff).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual(customerDropOffSuccess());
    customerDropOff.mockClear();
  });
  it("failure triggers error action", () => {
    const customerDropOff = jest
      .spyOn(api, "customerDropOffService")
      .mockImplementation(() => Promise.reject());
    const dispatched = {
      payload: undefined,
      type: "CUSTOMER_DROPOFF_ERROR",
    };
    const result = runSaga(
      {
        dispatch: (action) => Object.assign(dispatched, action),
      },
      customerDropOffSaga
    );
    expect(result).toBeTruthy();
    expect(customerDropOff).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual(customerDropOffError());
    customerDropOff.mockClear();
  });
});
