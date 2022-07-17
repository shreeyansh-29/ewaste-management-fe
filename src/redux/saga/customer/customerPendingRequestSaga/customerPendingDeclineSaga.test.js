/* eslint-disable no-undef */
import {takeLatest} from "redux-saga/effects";
import {runSaga} from "redux-saga";
import * as api from "../../../service/customer/customerPendingRequestService/customerPendingDeclineService";
import {
  customerPendingDeclineError,
  customerPendingDeclineSuccess,
} from "../../../action/customer/customerPendingRequestAction/customerPendingDeclineAction";
import {
  customerPendingDeclineSaga,
  watchCustomerPendingDecline,
} from "./customerPendingDeclineSaga";

describe("watchCustomerPendingDecline", () => {
  const genObject = watchCustomerPendingDecline();
  it("should wait", () => {
    expect(genObject.next().value).toEqual(
      takeLatest("CUSTOMER_PENDING_DECLINE_REQUEST", customerPendingDeclineSaga)
    );
  });
  it("should be done on next iteration", () => {
    expect(genObject.next().done).toBeTruthy();
  });
});
describe("test customerPendingDeclineSaga", () => {
  it("should call api and dispatch success action", async () => {
    const data = undefined;
    const generator = jest
      .spyOn(api, "customerPendingDeclineService")
      .mockImplementation(() => Promise.resolve(data));
    const dispatched = {
      payload: undefined,
      type: "CUSTOMER_PENDING_DECLINE_SUCCESS",
    };
    const result = runSaga(
      {
        dispatch: (action) => Object.assign(dispatched, action),
      },
      customerPendingDeclineSaga
    );
    expect(result).toBeTruthy();
    expect(generator).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual(customerPendingDeclineSuccess());
    generator.mockClear();
  });
  it("failure triggers error action", () => {
    const generator = jest
      .spyOn(api, "customerPendingDeclineService")
      .mockImplementation(() => Promise.reject());
    const dispatched = {
      payload: undefined,
      type: "CUSTOMER_PENDING_DECLINE_ERROR",
    };
    const result = runSaga(
      {
        dispatch: (action) => Object.assign(dispatched, action),
      },
      customerPendingDeclineSaga
    );
    expect(result).toBeTruthy();
    expect(generator).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual(customerPendingDeclineError());
    generator.mockClear();
  });
});
