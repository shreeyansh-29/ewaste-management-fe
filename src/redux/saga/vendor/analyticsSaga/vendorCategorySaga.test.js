/* eslint-disable no-undef */
import {takeLatest} from "redux-saga/effects";
import {runSaga} from "redux-saga";
import * as api from "../../../service/vendor/analyicsService/vendorCategoryService";
import {watchVendorCategory, vendorCategorySaga} from "./vendorCategorySaga";
import {
  vendorCategoryError,
  vendorCategorySuccess,
} from "../../../action/vendor/analyticsAction/vendorCategoryAction";

describe("watchVendorCategory", () => {
  const genObject = watchVendorCategory();
  it("should wait", () => {
    expect(genObject.next().value).toEqual(
      takeLatest("VENDOR_CATEGORY_REQUEST", vendorCategorySaga)
    );
  });
  it("should be done on next iteration", () => {
    expect(genObject.next().done).toBeTruthy();
  });
});
describe("test customerDrivesSaga", () => {
  it("should call api and dispatch success action", async () => {
    const generator = jest
      .spyOn(api, "vendorCategoryService")
      .mockImplementation(() => Promise.resolve());
    const dispatched = {
      payload: undefined,
      type: "VENDOR_CATEGORY_SUCCESS",
    };
    const result = runSaga(
      {
        dispatch: (action) => Object.assign(dispatched, action),
      },
      vendorCategorySaga
    );
    expect(result).toBeTruthy();
    expect(generator).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual(vendorCategorySuccess());
    generator.mockClear();
  });
  it("failure triggers error action", () => {
    const generator = jest
      .spyOn(api, "vendorCategoryService")
      .mockImplementation(() => Promise.reject());
    const dispatched = {
      payload: undefined,
      type: "VENDOR_CATEGORY_ERROR",
    };
    const result = runSaga(
      {
        dispatch: (action) => Object.assign(dispatched, action),
      },
      vendorCategorySaga
    );
    expect(result).toBeTruthy();
    expect(generator).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual(vendorCategoryError());
    generator.mockClear();
  });
});
