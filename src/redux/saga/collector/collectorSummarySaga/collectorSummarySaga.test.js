/* eslint-disable no-undef */
import {takeLatest} from "redux-saga/effects";
import {runSaga} from "redux-saga";
import * as api from "../../../../services/collector/collectorSummaryService/collectorSummaryService";
import {
  collectorSummarySaga,
  watchCollectorSummary,
} from "./collectorSummarySaga";
import {
  collectorSummaryError,
  collectorSummarySuccess,
} from "../../../action/collector/collectorSummaryAction/collectorSummaryAction";

describe("watchCollectorSummary", () => {
  const genObject = watchCollectorSummary();
  it("should wait", () => {
    expect(genObject.next().value).toEqual(
      takeLatest("COLLECTOR_SUMMARY_REQUEST", collectorSummarySaga)
    );
  });
  it("should be done on next iteration", () => {
    expect(genObject.next().done).toBeTruthy();
  });
});

describe("test collectorSummarySaga", () => {
  it("success triggers success action", () => {
    const generator = jest
      .spyOn(api, "collectorSummaryService")
      .mockImplementation(() => Promise.resolve());
    const dispatched = {
      payload: undefined,
      type: "COLLECTOR_SUMMARY_SUCCESS",
    };
    const result = runSaga(
      {
        dispatch: (action) => Object.assign(dispatched, action),
      },
      collectorSummarySaga
    );

    expect(result).toBeTruthy();
    expect(generator).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual(collectorSummarySuccess());
    generator.mockClear();
  });
  it("failure triggers error action", () => {
    const generator = jest
      .spyOn(api, "collectorSummaryService")
      .mockImplementation(() => Promise.reject());
    const dispatched = {
      payload: undefined,
      type: "COLLECTOR_SUMMARY_ERROR",
    };
    const result = runSaga(
      {
        dispatch: (action) => Object.assign(dispatched, action),
      },
      collectorSummarySaga
    );

    expect(result).toBeTruthy();
    expect(generator).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual(collectorSummaryError());
    generator.mockClear();
  });
});
