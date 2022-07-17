/* eslint-disable no-undef */
import {takeLatest} from "redux-saga/effects";
import {runSaga} from "redux-saga";
import {
  collectorForSaleError,
  collectorForSaleSuccess,
} from "../../../action/collector/collectorForSaleAction/collectorForSaleAction";
import {
  collectorForSaleSaga,
  watchCollectorForSale,
} from "./collectorForSaleSaga";
import * as api from "../../../service/collector/collectorForSaleService/collectorForSaleService";

describe("watchCollectorForSale", () => {
  const genObject = watchCollectorForSale();
  it("should wait", () => {
    expect(genObject.next().value).toEqual(
      takeLatest("COLLECTOR_FORSALE_REQUEST", collectorForSaleSaga)
    );
  });
  it("should be done on next iteration", () => {
    expect(genObject.next().done).toBeTruthy();
  });
});

describe("test collectorForSaleSaga", () => {
  it("success triggers success action", () => {
    const data = {itemName: "AC"};
    const generator = jest
      .spyOn(api, "collectorForSaleService")
      .mockImplementation(() => Promise.resolve(data));
    const dispatched = {
      payload: undefined,
      type: "COLLECTOR_FORSALE_SUCCESS",
    };
    const result = runSaga(
      {
        dispatch: (action) => Object.assign(dispatched, action),
      },
      collectorForSaleSaga
    );

    expect(result).toBeTruthy();
    expect(generator).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual(collectorForSaleSuccess());
    generator.mockClear();
  });
  it("failure triggers error action", () => {
    const forSale = jest
      .spyOn(api, "collectorForSaleService")
      .mockImplementation(() => Promise.reject());
    const dispatched = {payload: undefined, type: "COLLECTOR_FORSALE_ERROR"};
    const result = runSaga(
      {
        dispatch: (action) => Object.assign(dispatched, action),
      },
      collectorForSaleSaga
    );
    expect(result).toBeTruthy();
    expect(forSale).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual(collectorForSaleError());
    forSale.mockClear();
  });
});
