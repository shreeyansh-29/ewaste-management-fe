/* eslint-disable no-undef */
import {takeLatest} from "redux-saga/effects";
import {runSaga} from "redux-saga";
import * as api from "../../../service/vendor/analyicsService/vendorCollectorDataService";
import {
  watchVendorCollectorData,
  vendorCollectorDataSaga,
} from "./vendorCollectorDataSaga";
import {
  vendorCollectorDataError,
  vendorCollectorDataSuccess,
} from "../../../action/vendor/analyticsAction/vendorCollectorDataAction";

describe("watchVendorCollectorData", () => {
  const genObject = watchVendorCollectorData();
  it("should wait", () => {
    expect(genObject.next().value).toEqual(
      takeLatest("VENDOR_COLLECTOR_DATA_REQUEST", vendorCollectorDataSaga)
    );
  });
  it("should be done on next iteration", () => {
    expect(genObject.next().done).toBeTruthy();
  });
});
describe("test vendorCollectorDataSaga", () => {
  it("should call api and dispatch success action", async () => {
    const generator = jest
      .spyOn(api, "vendorCollectorDataService")
      .mockImplementation(() => Promise.resolve());
    const dispatched = {
      payload: undefined,
      type: "VENDOR_COLLECTOR_DATA_SUCCESS",
    };
    const result = runSaga(
      {
        dispatch: (action) => Object.assign(dispatched, action),
      },
      vendorCollectorDataSaga
    );
    expect(result).toBeTruthy();
    expect(generator).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual(vendorCollectorDataSuccess());
    generator.mockClear();
  });
  it("failure triggers error action", () => {
    const generator = jest
      .spyOn(api, "vendorCollectorDataService")
      .mockImplementation(() => Promise.reject());
    const dispatched = {
      payload: undefined,
      type: "VENDOR_COLLECTOR_DATA_ERROR",
    };
    const result = runSaga(
      {
        dispatch: (action) => Object.assign(dispatched, action),
      },
      vendorCollectorDataSaga
    );
    expect(result).toBeTruthy();
    expect(generator).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual(vendorCollectorDataError());
    generator.mockClear();
  });
});
