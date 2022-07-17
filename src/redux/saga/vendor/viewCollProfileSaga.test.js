/* eslint-disable no-undef */
import {takeLatest} from "redux-saga/effects";
import {runSaga} from "redux-saga";
import * as api from "../../service/vendor/viewColProfileService";
import {
  vendorViewAcceptCollectorSuccess,
  vendorViewAcceptCollectorError,
} from "../../action/vendor/viewCollProfileAction";
import {
  watchViewCollProfileSaga,
  viewAcceptColProfileSaga,
} from "./viewCollProfileSaga";

describe("watchViewCollProfileSaga", () => {
  const genObject = watchViewCollProfileSaga();
  it("should wait", () => {
    expect(genObject.next().value).toEqual(
      takeLatest("VENDOR_COLLECTORPROFILE_REQUEST", viewAcceptColProfileSaga)
    );
  });
  it("should be done on next iteration", () => {
    expect(genObject.next().done).toBeTruthy();
  });
});
describe("test viewColProfileSaga", () => {
  it("should call api and dispatch success action", async () => {
    const data = {id: 1};
    const generator = jest
      .spyOn(api, "viewColProfileService")
      .mockImplementation(() => Promise.resolve(data));
    const dispatched = {
      payload: undefined,
      type: "VENDOR_COLLECTORPROFILE_SUCCESS",
    };
    const result = runSaga(
      {
        dispatch: (action) => Object.assign(dispatched, action),
      },
      viewAcceptColProfileSaga
    );
    expect(result).toBeTruthy();
    expect(generator).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual(vendorViewAcceptCollectorSuccess());
    generator.mockClear();
  });
  it("failure triggers error action", () => {
    const generator = jest
      .spyOn(api, "viewColProfileService")
      .mockImplementation(() => Promise.reject());
    const dispatched = {
      payload: undefined,
      type: "VENDOR_COLLECTORPROFILE_ERROR",
    };
    const result = runSaga(
      {
        dispatch: (action) => Object.assign(dispatched, action),
      },
      viewAcceptColProfileSaga
    );
    expect(result).toBeTruthy();
    expect(generator).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual(vendorViewAcceptCollectorError());
    generator.mockClear();
  });
});
