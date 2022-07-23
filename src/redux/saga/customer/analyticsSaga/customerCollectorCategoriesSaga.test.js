/* eslint-disable no-undef */
import {takeLatest} from "redux-saga/effects";
import {runSaga} from "redux-saga";
import * as api from "../../../../services/customer/analyticsService/customerCollectorCategoriesService";
import {
  customerCollectorCategoriesSaga,
  watchCustomerCollectorCategories,
} from "./customerCollectorCategoriesSaga";
import {
  customerCollectorCategoriesError,
  customerCollectorCategoriesSuccess,
} from "../../../action/customer/analyticsAction/customerCollectorCategoriesAction";

describe("watchCustomerCollectorCategories", () => {
  const genObject = watchCustomerCollectorCategories();
  it("should wait", () => {
    expect(genObject.next().value).toEqual(
      takeLatest(
        "CUSTOMER_COLLECTORCATEGORIES_REQUEST",
        customerCollectorCategoriesSaga
      )
    );
  });
  it("should be done on next iteration", () => {
    expect(genObject.next().done).toBeTruthy();
  });
});
describe("test customerCollectorCategoriesSaga", () => {
  it("should call api and dispatch success action", async () => {
    const collectorCategories = jest
      .spyOn(api, "customerCollectorCategoriesService")
      .mockImplementation(() => Promise.resolve());
    const dispatched = {
      payload: undefined,
      type: "CUSTOMER_COLLECTORCATEGORIES_SUCCESS",
    };
    const result = runSaga(
      {
        dispatch: (action) => Object.assign(dispatched, action),
      },
      customerCollectorCategoriesSaga
    );
    expect(result).toBeTruthy();
    expect(collectorCategories).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual(customerCollectorCategoriesSuccess());
    collectorCategories.mockClear();
  });
  it("failure triggers error action", () => {
    const collectorCategories = jest
      .spyOn(api, "customerCollectorCategoriesService")
      .mockImplementation(() => Promise.reject());
    const dispatched = {
      payload: undefined,
      type: "CUSTOMER_COLLECTORCATEGORIES_ERROR",
    };
    const result = runSaga(
      {
        dispatch: (action) => Object.assign(dispatched, action),
      },
      customerCollectorCategoriesSaga
    );
    expect(result).toBeTruthy();
    expect(collectorCategories).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual(customerCollectorCategoriesError());
    collectorCategories.mockClear();
  });
});
