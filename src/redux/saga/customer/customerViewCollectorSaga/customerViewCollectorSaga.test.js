/* eslint-disable no-undef */
import {takeLatest} from "redux-saga/effects";
import {runSaga} from "redux-saga";
import * as api from "../../../service/customer/customerViewCollectorService/customerViewCollectorService";
import {
  customerViewCollectorsError,
  customerViewCollectorsSuccess,
} from "../../../action/customer/customerViewCollectorAction/customerViewCollectorAction";
import {
  customerViewCollectorsSaga,
  watchCustomerViewCollectors,
} from "./customerViewCollectorSaga";

describe("watchCustomerViewCollector", () => {
  const genObject = watchCustomerViewCollectors();
  it("should wait", () => {
    expect(genObject.next().value).toEqual(
      takeLatest("CUSTOMER_VIEW_COLLECTORS_REQUEST", customerViewCollectorsSaga)
    );
  });
  it("should be done on next iteration", () => {
    expect(genObject.next().done).toBeTruthy();
  });
});
describe("test customerViewCollectorSaga", () => {
  it("should call api and dispatch success action", async () => {
    const data = {id: 1};
    const generator = jest
      .spyOn(api, "customerViewCollectorService")
      .mockImplementation(() => Promise.resolve(data));
    const dispatched = {
      payload: undefined,
      type: "CUSTOMER_VIEW_COLLECTORS_SUCCESS",
    };
    const result = runSaga(
      {
        dispatch: (action) => Object.assign(dispatched, action),
      },
      customerViewCollectorsSaga
    );
    expect(result).toBeTruthy();
    expect(generator).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual(customerViewCollectorsSuccess());
    generator.mockClear();
  });
  it("failure triggers error action", () => {
    const generator = jest
      .spyOn(api, "customerViewCollectorService")
      .mockImplementation(() => Promise.reject());
    const dispatched = {
      payload: undefined,
      type: "CUSTOMER_VIEW_COLLECTORS_ERROR",
    };
    const result = runSaga(
      {
        dispatch: (action) => Object.assign(dispatched, action),
      },
      customerViewCollectorsSaga
    );
    expect(result).toBeTruthy();
    expect(generator).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual(customerViewCollectorsError());
    generator.mockClear();
  });
});
