/* eslint-disable no-undef */
import {takeLatest} from "redux-saga/effects";
import {runSaga} from "redux-saga";
import * as api from "../../../../services/collector/collectorProfileService/collectorProfileEditService";
import {
  collectorProfileEditSaga,
  watchCollectorProfileEdit,
} from "./collectorProfileEditSaga";
import {
  collectorProfileEditError,
  collectorProfileEditSuccess,
} from "../../../action/collector/collectorProfileAction/collectorProfileEditAction";

describe("watchCollectorProfileEdit", () => {
  const genObject = watchCollectorProfileEdit();
  it("should wait", () => {
    expect(genObject.next().value).toEqual(
      takeLatest("COLLECTOR_PROFILE_EDIT_REQUEST", collectorProfileEditSaga)
    );
  });
  it("should be done on next iteration", () => {
    expect(genObject.next().done).toBeTruthy();
  });
});

describe("test collectorProfileEditSaga", () => {
  it("success triggers success action", () => {
    const data = {firstName: "Shrey", lastName: "Singh"};
    const generator = jest
      .spyOn(api, "collectorProfileEditService")
      .mockImplementation(() => Promise.resolve(data));
    const dispatched = {
      payload: undefined,
      type: "COLLECTOR_PROFILE_EDIT_SUCCESS",
    };
    const result = runSaga(
      {
        dispatch: (action) => Object.assign(dispatched, action),
      },
      collectorProfileEditSaga
    );

    expect(result).toBeTruthy();
    expect(generator).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual(collectorProfileEditSuccess());
    generator.mockClear();
  });
  it("failure triggers error action", () => {
    const generator = jest
      .spyOn(api, "collectorProfileEditService")
      .mockImplementation(() => Promise.reject());
    const dispatched = {
      payload: undefined,
      type: "COLLECTOR_PROFILE_EDIT_ERROR",
    };
    const result = runSaga(
      {
        dispatch: (action) => Object.assign(dispatched, action),
      },
      collectorProfileEditSaga
    );

    expect(result).toBeTruthy();
    expect(generator).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual(collectorProfileEditError());
    generator.mockClear();
  });
});
