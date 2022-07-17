/* eslint-disable no-undef */
import {takeLatest} from "redux-saga/effects";
import {runSaga} from "redux-saga";
import * as api from "../../../service/customer/customerPickUpService/customerCountCollService";
import {
  customerCountCollError,
  customerCountCollSuccess,
} from "../../../action/customer/customerPickUpAction/customerCountCollAction";
import {
  customerCountCollSaga,
  watchCustomerCountColl,
} from "./customerCountCollSaga";

describe("watchCustomerCountColl", () => {
  const genObject = watchCustomerCountColl();
  it("should wait", () => {
    expect(genObject.next().value).toEqual(
      takeLatest("CUSTOMER_COUNT_COLL_REQUEST", customerCountCollSaga)
    );
  });
  it("should be done on next iteration", () => {
    expect(genObject.next().done).toBeTruthy();
  });
});
describe("test customerCountCollSaga", () => {
  it("should call api and dispatch success action", async () => {
    const data = {category: "Lamps"};
    const generator = jest
      .spyOn(api, "customerCountCollService")
      .mockImplementation(() => Promise.resolve(data));
    const dispatched = {
      payload: undefined,
      type: "CUSTOMER_COUNT_COLL_SUCCESS",
    };
    const result = runSaga(
      {
        dispatch: (action) => Object.assign(dispatched, action),
      },
      customerCountCollSaga
    );
    expect(result).toBeTruthy();
    expect(generator).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual(customerCountCollSuccess());
    generator.mockClear();
  });
  it("failure triggers error action", () => {
    const generator = jest
      .spyOn(api, "customerCountCollService")
      .mockImplementation(() => Promise.reject());
    const dispatched = {
      payload: undefined,
      type: "CUSTOMER_COUNT_COLL_ERROR",
    };
    const result = runSaga(
      {
        dispatch: (action) => Object.assign(dispatched, action),
      },
      customerCountCollSaga
    );
    expect(result).toBeTruthy();
    expect(generator).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual(customerCountCollError());
    generator.mockClear();
  });
});
