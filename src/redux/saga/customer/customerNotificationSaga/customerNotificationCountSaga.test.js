/* eslint-disable no-undef */
import {takeLatest} from "redux-saga/effects";
import {runSaga} from "redux-saga";
import * as api from "../../../../services/customer/customerNotificationService/customerNotificationCountService";
import {
  customerNotificationCountError,
  customerNotificationCountSuccess,
} from "../../../action/customer/customerNotificationAction/customerNotificationCountAction";
import {
  customerNotificationCountSaga,
  watchCustomerNotificationCount,
} from "./customerNotificationCountSaga";

describe("watchCustomerNotificationCount", () => {
  const genObject = watchCustomerNotificationCount();
  it("should wait", () => {
    expect(genObject.next().value).toEqual(
      takeLatest(
        "CUSTOMER_NOTIFICATION_COUNT_REQUEST",
        customerNotificationCountSaga
      )
    );
  });
  it("should be done on next iteration", () => {
    expect(genObject.next().done).toBeTruthy();
  });
});
describe("test customerNotificationCountSaga", () => {
  it("should call api and dispatch success action", async () => {
    const generator = jest
      .spyOn(api, "customerNotificationCountService")
      .mockImplementation(() => Promise.resolve());
    const dispatched = {
      payload: undefined,
      type: "CUSTOMER_NOTIFICATION_COUNT_SUCCESS",
    };
    const result = runSaga(
      {
        dispatch: (action) => Object.assign(dispatched, action),
      },
      customerNotificationCountSaga
    );
    expect(result).toBeTruthy();
    expect(generator).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual(customerNotificationCountSuccess());
    generator.mockClear();
  });
  it("failure triggers error action", () => {
    const generator = jest
      .spyOn(api, "customerNotificationCountService")
      .mockImplementation(() => Promise.reject());
    const dispatched = {
      payload: undefined,
      type: "CUSTOMER_NOTIFICATION_COUNT_ERROR",
    };
    const result = runSaga(
      {
        dispatch: (action) => Object.assign(dispatched, action),
      },
      customerNotificationCountSaga
    );
    expect(result).toBeTruthy();
    expect(generator).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual(customerNotificationCountError());
    generator.mockClear();
  });
});
