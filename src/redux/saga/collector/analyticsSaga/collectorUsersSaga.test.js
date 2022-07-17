/* eslint-disable no-undef */
import {takeLatest} from "redux-saga/effects";
import {runSaga} from "redux-saga";
import {
  collectorUsersError,
  collectorUsersSuccess,
} from "../../../action/collector/analyticsAction/collectorUsersAction";
import * as api from "../../../service/collector/analyticsService/collectorUsersService";
import {collectorUsersSaga, watchCollectorUsers} from "./collectorUsersSaga";

describe("watchCollectorUsers", () => {
  const genObject = watchCollectorUsers();
  it("should wait", () => {
    expect(genObject.next().value).toEqual(
      takeLatest("COLLECTOR_USERS_REQUEST", collectorUsersSaga)
    );
  });
  it("should be done on next iteration", () => {
    expect(genObject.next().done).toBeTruthy();
  });
});

describe("test collectorUsersSaga", () => {
  it("success triggers success action", () => {
    const generator = jest
      .spyOn(api, "collectorUsersService")
      .mockImplementation(() => Promise.resolve());
    const dispatched = {
      payload: undefined,
      type: "COLLECTOR_USERS_SUCCESS",
    };
    const result = runSaga(
      {
        dispatch: (action) => Object.assign(dispatched, action),
      },
      collectorUsersSaga
    );

    expect(result).toBeTruthy();
    expect(generator).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual(collectorUsersSuccess());
    generator.mockClear();
  });
  it("failure triggers error action", () => {
    const generator = jest
      .spyOn(api, "collectorUsersService")
      .mockImplementation(() => Promise.reject());
    const dispatched = {
      payload: undefined,
      type: "COLLECTOR_USERS_ERROR",
    };
    const result = runSaga(
      {
        dispatch: (action) => Object.assign(dispatched, action),
      },
      collectorUsersSaga
    );

    expect(result).toBeTruthy();
    expect(generator).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual(collectorUsersError());
    generator.mockClear();
  });
});
