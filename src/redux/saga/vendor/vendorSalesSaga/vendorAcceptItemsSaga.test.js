/* eslint-disable no-undef */
import {takeLatest} from "redux-saga/effects";
import {runSaga} from "redux-saga";
import * as api from "../../../../services/vendor/vendorSalesService/vendorAcceptItemsService";
import {
  watchVendorAcceptItems,
  vendorAcceptItemsSaga,
} from "./vendorAcceptItemsSaga";
import {
  vendorAcceptItemsError,
  vendorAcceptItemsSuccess,
} from "../../../action/vendor/vendorSalesAction/vendorAcceptItemsAction";

describe("watchVendorAcceptItems", () => {
  const genObject = watchVendorAcceptItems();
  it("should wait", () => {
    expect(genObject.next().value).toEqual(
      takeLatest("VENDOR_ACCEPT_ITEMS_REQUEST", vendorAcceptItemsSaga)
    );
  });
  it("should be done on next iteration", () => {
    expect(genObject.next().done).toBeTruthy();
  });
});
describe("test vendorAcceptItemsSaga", () => {
  it("should call api and dispatch success action", async () => {
    const data = undefined;
    const generator = jest
      .spyOn(api, "vendorAcceptItemsService")
      .mockImplementation(() => Promise.resolve(data));
    const dispatched = {
      payload: undefined,
      type: "VENDOR_ACCEPT_ITEMS_SUCCESS",
    };
    const result = runSaga(
      {
        dispatch: (action) => Object.assign(dispatched, action),
      },
      vendorAcceptItemsSaga
    );
    expect(result).toBeTruthy();
    expect(generator).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual(vendorAcceptItemsSuccess());
    generator.mockClear();
  });
  it("failure triggers error action", () => {
    const generator = jest
      .spyOn(api, "vendorAcceptItemsService")
      .mockImplementation(() => Promise.reject());
    const dispatched = {
      payload: undefined,
      type: "VENDOR_ACCEPT_ITEMS_ERROR",
    };
    const result = runSaga(
      {
        dispatch: (action) => Object.assign(dispatched, action),
      },
      vendorAcceptItemsSaga
    );
    expect(result).toBeTruthy();
    expect(generator).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual(vendorAcceptItemsError());
    generator.mockClear();
  });
});
