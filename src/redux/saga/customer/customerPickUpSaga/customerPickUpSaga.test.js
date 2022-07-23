/* eslint-disable no-undef */
import {takeLatest} from "redux-saga/effects";
import {runSaga} from "redux-saga";
import * as api from "../../../../services/customer/customerPickUpService/customerPickUpService";
import {
  customerPickUpError,
  customerPickUpSuccess,
} from "../../../action/customer/customerPickUpAction/customerPickUpAction";
import {customerPickUpSaga, watchCustomerPickUp} from "./customerPickUpSaga";

describe("watchCustomerPickUp", () => {
  const genObject = watchCustomerPickUp();
  it("should wait", () => {
    expect(genObject.next().value).toEqual(
      takeLatest("CUSTOMER_PICKUP_REQUEST", customerPickUpSaga)
    );
  });
  it("should be done on next iteration", () => {
    expect(genObject.next().done).toBeTruthy();
  });
});
describe("test customerPickUpSaga", () => {
  it("should call api and dispatch success action", async () => {
    const data = {itemName: "AC"};
    const generator = jest
      .spyOn(api, "customerPickUpService")
      .mockImplementation(() => Promise.resolve(data));
    const dispatched = {
      payload: undefined,
      type: "CUSTOMER_PICKUP_SUCCESS",
    };
    const result = runSaga(
      {
        dispatch: (action) => Object.assign(dispatched, action),
      },
      customerPickUpSaga
    );
    expect(result).toBeTruthy();
    expect(generator).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual(customerPickUpSuccess());
    generator.mockClear();
  });
  it("failure triggers error action", () => {
    const generator = jest
      .spyOn(api, "customerPickUpService")
      .mockImplementation(() => Promise.reject());
    const dispatched = {
      payload: undefined,
      type: "CUSTOMER_PICKUP_ERROR",
    };
    const result = runSaga(
      {
        dispatch: (action) => Object.assign(dispatched, action),
      },
      customerPickUpSaga
    );
    expect(result).toBeTruthy();
    expect(generator).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual(customerPickUpError());
    generator.mockClear();
  });
});
