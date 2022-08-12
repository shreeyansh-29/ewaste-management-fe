/* eslint-disable no-undef */
import * as types from "../../../config/actionType";
import * as actions from "../../../action/collector/collectorPendingAction/collectorPendingAction";

describe("test collectorPendingAction", () => {
  const payload = {status: "success"};
  const error = {status: "fail"};
  it("test collectorPendingRequest function", () => {
    expect(actions.collectorPendingRequest()).toEqual({
      type: types.COLLECTOR_PENDING_REQUEST,
    });
  });
  it("test collectorPendingSuccess function", () => {
    expect(actions.collectorPendingSuccess(payload)).toEqual({
      type: types.COLLECTOR_PENDING_SUCCESS,
      payload,
    });
  });
  it("test collectorPendingError function", () => {
    expect(actions.collectorPendingError(error)).toEqual({
      type: types.COLLECTOR_PENDING_ERROR,
      payload: error,
    });
  });
});
