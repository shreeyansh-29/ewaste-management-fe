/* eslint-disable no-undef */
import {takeLatest} from "redux-saga/effects";
import {runSaga} from "redux-saga";
import * as api from "../../../service/customer/customerCompletedRequestService/customerCompletedRequestService";
import {
  customerCompletedRequestSaga,
  watchCustomerCompletedRequest,
} from "./customerCompletedRequestSaga";
import {
  customerCompletedError,
  customerCompletedSuccess,
} from "../../../action/customer/customerCompletedRequestAction/customerCompletedRequestAction";

describe("watchCustomerCompletedRequest", () => {
  const genObject = watchCustomerCompletedRequest();
  it("should wait", () => {
    expect(genObject.next().value).toEqual(
      takeLatest("CUSTOMER_COMPLETED_REQUEST", customerCompletedRequestSaga)
    );
  });
  it("should be done on next iteration", () => {
    expect(genObject.next().done).toBeTruthy();
  });
});
describe("test customerCompletedRequestSaga", () => {
  it("should call api and dispatch success action", async () => {
    const completedRequest = jest
      .spyOn(api, "customerCompletedRequestService")
      .mockImplementation(() => Promise.resolve());
    const dispatched = {
      payload: undefined,
      type: "CUSTOMER_COMPLETED_SUCCESS",
    };
    const result = runSaga(
      {
        dispatch: (action) => Object.assign(dispatched, action),
      },
      customerCompletedRequestSaga
    );
    expect(result).toBeTruthy();
    expect(completedRequest).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual(customerCompletedSuccess());
    completedRequest.mockClear();
  });
  it("failure triggers error action", () => {
    const completedRequest = jest
      .spyOn(api, "customerCompletedRequestService")
      .mockImplementation(() => Promise.reject());
    const dispatched = {
      payload: undefined,
      type: "CUSTOMER_COMPLETED_ERROR",
    };
    const result = runSaga(
      {
        dispatch: (action) => Object.assign(dispatched, action),
      },
      customerCompletedRequestSaga
    );
    expect(result).toBeTruthy();
    expect(completedRequest).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual(customerCompletedError());
    completedRequest.mockClear();
  });
});
