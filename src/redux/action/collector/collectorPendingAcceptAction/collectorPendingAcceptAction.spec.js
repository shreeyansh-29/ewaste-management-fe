/* eslint-disable no-undef */
import * as types from "../../../config/actionType";
import * as actions from "../../../action/collector/collectorPendingAcceptAction/collectorPendingAcceptAction";

describe("test collectorPendingAcceptAction", () => {
  const data = {};
  const payload = {status: "success"};
  const error = {status: "fail"};
  it("test collectorPendingAcceptRequest function", () => {
    expect(actions.collectorPendingAcceptRequest(data)).toEqual({
      type: types.COLLECTOR_PENDING_ACCEPT_REQUEST,
      payload: data,
    });
  });
  it("test collectorPendingAcceptSuccess function", () => {
    expect(actions.collectorPendingAcceptSuccess(payload)).toEqual({
      type: types.COLLECTOR_PENDING_ACCEPT_SUCCESS,
      payload,
    });
  });
  it("test collectorPendingAcceptError function", () => {
    expect(actions.collectorPendingAcceptError(error)).toEqual({
      type: types.COLLECTOR_PENDING_ACCEPT_ERROR,
      payload: error,
    });
  });
});
