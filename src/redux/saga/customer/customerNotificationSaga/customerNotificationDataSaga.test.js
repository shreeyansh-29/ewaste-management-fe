/* eslint-disable no-undef */
import {takeLatest} from "redux-saga/effects";
import {runSaga} from "redux-saga";
import * as api from "../../../../services/customer/customerNotificationService/customerNotificationDataService";
import {
  customerNotificationDataError,
  customerNotificationDataSuccess,
} from "../../../action/customer/customerNotificationAction/customerNotificationDataAction";
import {
  customerNotificationDataSaga,
  watchCustomerNotificationData,
} from "./customerNotificationDataSaga";

describe("watchCustomerNotificationData", () => {
  const genObject = watchCustomerNotificationData();
  it("should wait", () => {
    expect(genObject.next().value).toEqual(
      takeLatest(
        "CUSTOMER_NOTIFICATION_DATA_REQUEST",
        customerNotificationDataSaga
      )
    );
  });
  it("should be done on next iteration", () => {
    expect(genObject.next().done).toBeTruthy();
  });
});
describe("test customerNotificationDataSaga", () => {
  it("should call api and dispatch success action", async () => {
    const generator = jest
      .spyOn(api, "customerNotificationDataService")
      .mockImplementation(() => Promise.resolve());
    const dispatched = {
      payload: undefined,
      type: "CUSTOMER_NOTIFICATION_DATA_SUCCESS",
    };
    const result = runSaga(
      {
        dispatch: (action) => Object.assign(dispatched, action),
      },
      customerNotificationDataSaga
    );
    expect(result).toBeTruthy();
    expect(generator).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual(customerNotificationDataSuccess());
    generator.mockClear();
  });
  it("failure triggers error action", () => {
    const generator = jest
      .spyOn(api, "customerNotificationDataService")
      .mockImplementation(() => Promise.reject());
    const dispatched = {
      payload: undefined,
      type: "CUSTOMER_NOTIFICATION_DATA_ERROR",
    };
    const result = runSaga(
      {
        dispatch: (action) => Object.assign(dispatched, action),
      },
      customerNotificationDataSaga
    );
    expect(result).toBeTruthy();
    expect(generator).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual(customerNotificationDataError());
    generator.mockClear();
  });
});
