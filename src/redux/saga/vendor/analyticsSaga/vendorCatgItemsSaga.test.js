/* eslint-disable no-undef */
import {takeLatest} from "redux-saga/effects";
import {runSaga} from "redux-saga";
import * as api from "../../../service/vendor/analyicsService/vendorCatgItemsService";
import {watchVendorCatgItems, vendorCatgItemsSaga} from "./vendorCatgItemsSaga";
import {
  vendorCatgItemsError,
  vendorCatgItemsSuccess,
} from "../../../action/vendor/analyticsAction/vendorCatgItemsAction";

describe("watchVendorCatgItems", () => {
  const genObject = watchVendorCatgItems();
  it("should wait", () => {
    expect(genObject.next().value).toEqual(
      takeLatest("VENDOR_CATGITEMS_REQUEST", vendorCatgItemsSaga)
    );
  });
  it("should be done on next iteration", () => {
    expect(genObject.next().done).toBeTruthy();
  });
});
describe("test vendorCatgItemsSaga", () => {
  it("should call api and dispatch success action", async () => {
    const generator = jest
      .spyOn(api, "vendorCatgItemsService")
      .mockImplementation(() => Promise.resolve());
    const dispatched = {
      payload: undefined,
      type: "VENDOR_CATGITEMS_SUCCESS",
    };
    const result = runSaga(
      {
        dispatch: (action) => Object.assign(dispatched, action),
      },
      vendorCatgItemsSaga
    );
    expect(result).toBeTruthy();
    expect(generator).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual(vendorCatgItemsSuccess());
    generator.mockClear();
  });
  it("failure triggers error action", () => {
    const generator = jest
      .spyOn(api, "vendorCatgItemsService")
      .mockImplementation(() => Promise.reject());
    const dispatched = {
      payload: undefined,
      type: "VENDOR_CATGITEMS_ERROR",
    };
    const result = runSaga(
      {
        dispatch: (action) => Object.assign(dispatched, action),
      },
      vendorCatgItemsSaga
    );
    expect(result).toBeTruthy();
    expect(generator).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual(vendorCatgItemsError());
    generator.mockClear();
  });
});
