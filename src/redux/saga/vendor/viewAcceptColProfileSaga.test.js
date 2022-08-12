/* eslint-disable no-undef */
import {takeLatest} from "redux-saga/effects";
import {runSaga} from "redux-saga";
import * as api from "../../../services/vendor/viewAcceptCollProfileService";
import {
  vendorCollectorProfileSuccess,
  vendorCollectorProfileError,
} from "../../action/vendor/viewAcceptCollectorProfileAction";
import {
  watchViewAcceptColProfileSaga,
  viewColProfileSaga,
} from "./viewAcceptColProfileSaga";

describe("watchViewAcceptColProfileSaga", () => {
  const genObject = watchViewAcceptColProfileSaga();
  it("should wait", () => {
    expect(genObject.next().value).toEqual(
      takeLatest("VENDOR_COLLECTORPROFILE_ACCEPT_REQUEST", viewColProfileSaga)
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
      .spyOn(api, "viewAcceptCollProfileService")
      .mockImplementation(() => Promise.resolve(data));
    const dispatched = {
      payload: undefined,
      type: "VENDOR_COLLECTORPROFILE_ACCEPT_SUCCESS",
    };
    const result = runSaga(
      {
        dispatch: (action) => Object.assign(dispatched, action),
      },
      viewColProfileSaga
    );
    expect(result).toBeTruthy();
    expect(generator).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual(vendorCollectorProfileSuccess());
    generator.mockClear();
  });
  it("failure triggers error action", () => {
    const generator = jest
      .spyOn(api, "viewAcceptCollProfileService")
      .mockImplementation(() => Promise.reject());
    const dispatched = {
      payload: undefined,
      type: "VENDOR_COLLECTORPROFILE_ACCEPT_ERROR",
    };
    const result = runSaga(
      {
        dispatch: (action) => Object.assign(dispatched, action),
      },
      viewColProfileSaga
    );
    expect(result).toBeTruthy();
    expect(generator).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual(vendorCollectorProfileError());
    generator.mockClear();
  });
});
