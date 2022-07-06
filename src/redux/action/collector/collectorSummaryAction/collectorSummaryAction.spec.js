/* eslint-disable no-undef */
import * as types from "../../../config/actionType";
import * as actions from "../../../action/collector/collectorSummaryAction/collectorSummaryAction";

describe("test collectorSummaryAction", () => {
  const payload = {status: "success"};
  const error = {status: "fail"};
  it("test collectorSummaryRequest function", () => {
    expect(actions.collectorSummaryRequest()).toEqual({
      type: types.COLLECTOR_SUMMARY_REQUEST,
    });
  });
  it("test collectorSummarySuccess function", () => {
    expect(actions.collectorSummarySuccess(payload)).toEqual({
      type: types.COLLECTOR_SUMMARY_SUCCESS,
      payload,
    });
  });
  it("test collectorSummaryError function", () => {
    expect(actions.collectorSummaryError(error)).toEqual({
      type: types.COLLECTOR_SUMMARY_ERROR,
      payload: error,
    });
  });
});
