/* eslint-disable no-undef */
import {takeLatest} from "redux-saga/effects";
import {runSaga} from "redux-saga";
import * as api from "../../../service/vendor/vendorMyOrdersService/vendorMyOrdersService";
import {watchVendorMyOrders, vendorMyOrdersSaga} from "./vendorMyOrdersSaga";
import {
  vendorMyOrdersError,
  vendorMyOrdersSuccess,
} from "../../../action/vendor/vendorMyOrdersAction/vendorMyOrdersAction";

describe("watchVendorMyOrders", () => {
  const genObject = watchVendorMyOrders();
  it("should wait", () => {
    expect(genObject.next().value).toEqual(
      takeLatest("VENDOR_MYORDERS_REQUEST", vendorMyOrdersSaga)
    );
  });
  it("should be done on next iteration", () => {
    expect(genObject.next().done).toBeTruthy();
  });
});
describe("test vendorMyOrdersSaga", () => {
  it("should call api and dispatch success action", async () => {
    const generator = jest
      .spyOn(api, "vendorMyOrdersService")
      .mockImplementation(() => Promise.resolve());
    const dispatched = {
      payload: undefined,
      type: "VENDOR_MYORDERS_SUCCESS",
    };
    const result = runSaga(
      {
        dispatch: (action) => Object.assign(dispatched, action),
      },
      vendorMyOrdersSaga
    );
    expect(result).toBeTruthy();
    expect(generator).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual(vendorMyOrdersSuccess());
    generator.mockClear();
  });
  it("failure triggers error action", () => {
    const generator = jest
      .spyOn(api, "vendorMyOrdersService")
      .mockImplementation(() => Promise.reject());
    const dispatched = {
      payload: undefined,
      type: "VENDOR_MYORDERS_ERROR",
    };
    const result = runSaga(
      {
        dispatch: (action) => Object.assign(dispatched, action),
      },
      vendorMyOrdersSaga
    );
    expect(result).toBeTruthy();
    expect(generator).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual(vendorMyOrdersError());
    generator.mockClear();
  });
});
