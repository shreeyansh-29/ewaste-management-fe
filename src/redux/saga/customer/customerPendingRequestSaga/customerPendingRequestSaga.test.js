/* eslint-disable no-undef */
import {takeLatest} from "redux-saga/effects";
import {runSaga} from "redux-saga";
import * as api from "../../../service/customer/customerPendingRequestService/customerPendingRequestService";
import {
  customerPendingError,
  customerPendingSuccess,
} from "../../../action/customer/customerPendingRequestAction/customerPendingRequestAction";
import {
  customerPendingRequestSaga,
  watchCustomerPendingRequest,
} from "./customerPendingRequestSaga";

describe("watchCustomerPendingRequest", () => {
  const genObject = watchCustomerPendingRequest();
  it("should wait", () => {
    expect(genObject.next().value).toEqual(
      takeLatest("CUSTOMER_PENDING_REQUEST", customerPendingRequestSaga)
    );
  });
  it("should be done on next iteration", () => {
    expect(genObject.next().done).toBeTruthy();
  });
});
describe("test customerPendingRequestSaga", () => {
  it("should call api and dispatch success action", async () => {
    const generator = jest
      .spyOn(api, "customerPendingRequestService")
      .mockImplementation(() => Promise.resolve());
    const dispatched = {
      payload: undefined,
      type: "CUSTOMER_PENDING_SUCCESS",
    };
    const result = runSaga(
      {
        dispatch: (action) => Object.assign(dispatched, action),
      },
      customerPendingRequestSaga
    );
    expect(result).toBeTruthy();
    expect(generator).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual(customerPendingSuccess());
    generator.mockClear();
  });
  it("failure triggers error action", () => {
    const generator = jest
      .spyOn(api, "customerPendingRequestService")
      .mockImplementation(() => Promise.reject());
    const dispatched = {
      payload: undefined,
      type: "CUSTOMER_PENDING_ERROR",
    };
    const result = runSaga(
      {
        dispatch: (action) => Object.assign(dispatched, action),
      },
      customerPendingRequestSaga
    );
    expect(result).toBeTruthy();
    expect(generator).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual(customerPendingError());
    generator.mockClear();
  });
});
