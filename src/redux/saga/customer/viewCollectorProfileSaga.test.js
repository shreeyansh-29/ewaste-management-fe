/* eslint-disable no-undef */
import {takeLatest} from "redux-saga/effects";
import {runSaga} from "redux-saga";
import * as api from "../../service/customer/viewCollectorProfileService";
import {
  viewCollectorProfileError,
  viewCollectorProfileSuccess,
} from "../../action/customer/viewCollectorProfileAction";
import {
  viewCollectorProfileSaga,
  watchViewCollectorProfileSaga,
} from "./viewCollectorProfileSaga";

describe("watchViewCollectorProfileSaga", () => {
  const genObject = watchViewCollectorProfileSaga();
  it("should wait", () => {
    expect(genObject.next().value).toEqual(
      takeLatest("CUSTOMER_COLLECTORPROFILE_REQUEST", viewCollectorProfileSaga)
    );
  });
  it("should be done on next iteration", () => {
    expect(genObject.next().done).toBeTruthy();
  });
});

describe("test collectorSummarySaga", () => {
  it("success triggers success action", () => {
    const data = {id: 1};
    const generator = jest
      .spyOn(api, "viewCollectorProfileService")
      .mockImplementation(() => Promise.resolve(data));
    const dispatched = {
      payload: undefined,
      type: "CUSTOMER_COLLECTORPROFILE_SUCCESS",
    };
    const result = runSaga(
      {
        dispatch: (action) => Object.assign(dispatched, action),
      },
      viewCollectorProfileSaga
    );

    expect(result).toBeTruthy();

    expect(generator).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual(viewCollectorProfileSuccess());
    generator.mockClear();
  });
  it("failure triggers error action", () => {
    const generator = jest
      .spyOn(api, "viewCollectorProfileService")
      .mockImplementation(() => Promise.reject());
    const dispatched = {
      payload: undefined,
      type: "CUSTOMER_COLLECTORPROFILE_ERROR",
    };
    const result = runSaga(
      {
        dispatch: (action) => Object.assign(dispatched, action),
      },
      viewCollectorProfileSaga
    );

    expect(result).toBeTruthy();

    expect(generator).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual(viewCollectorProfileError());
    generator.mockClear();
  });
});
