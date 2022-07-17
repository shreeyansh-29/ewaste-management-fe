/* eslint-disable no-undef */
import {takeLatest} from "redux-saga/effects";
import {runSaga} from "redux-saga";
import * as api from "../../../service/vendor/vendorSalesService/vendorViewItemsService";
import {watchVendorViewItems, vendorViewItemsSaga} from "./vendorViewItemsSaga";
import {
  vendorViewItemsError,
  vendorViewItemsSuccess,
} from "../../../action/vendor/vendorSalesAction/vendorViewItemsAction";

describe("watchVendorViewItems", () => {
  const genObject = watchVendorViewItems();
  it("should wait", () => {
    expect(genObject.next().value).toEqual(
      takeLatest("VENDOR_VIEW_ITEMS_REQUEST", vendorViewItemsSaga)
    );
  });
  it("should be done on next iteration", () => {
    expect(genObject.next().done).toBeTruthy();
  });
});
describe("test vendorViewItemsSaga", () => {
  it("should call api and dispatch success action", async () => {
    const generator = jest
      .spyOn(api, "vendorViewItemsService")
      .mockImplementation(() => Promise.resolve());
    const dispatched = {
      payload: undefined,
      type: "VENDOR_VIEW_ITEMS_SUCCESS",
    };
    const result = runSaga(
      {
        dispatch: (action) => Object.assign(dispatched, action),
      },
      vendorViewItemsSaga
    );
    expect(result).toBeTruthy();
    expect(generator).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual(vendorViewItemsSuccess());
    generator.mockClear();
  });
  it("failure triggers error action", () => {
    const generator = jest
      .spyOn(api, "vendorViewItemsService")
      .mockImplementation(() => Promise.reject());
    const dispatched = {
      payload: undefined,
      type: "VENDOR_VIEW_ITEMS_ERROR",
    };
    const result = runSaga(
      {
        dispatch: (action) => Object.assign(dispatched, action),
      },
      vendorViewItemsSaga
    );
    expect(result).toBeTruthy();
    expect(generator).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual(vendorViewItemsError());
    generator.mockClear();
  });
});
