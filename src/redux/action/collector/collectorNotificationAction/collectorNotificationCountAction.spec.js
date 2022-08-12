/* eslint-disable no-undef */
import * as types from "../../../config/actionType";
import * as actions from "../../../action/collector/collectorNotificationAction/collectorNotificationCountAction";

describe("test collectorNotificationCountAction", () => {
  const payload = {status: "success"};
  const error = {status: "fail"};
  it("test collectorNotificationCountRequest function", () => {
    expect(actions.collectorNotificationCountRequest()).toEqual({
      type: types.COLLECTOR_NOTIFICATION_COUNT_REQUEST,
    });
  });
  it("test collectorNotificationCountSuccess function", () => {
    expect(actions.collectorNotificationCountSuccess(payload)).toEqual({
      type: types.COLLECTOR_NOTIFICATION_COUNT_SUCCESS,
      payload,
    });
  });
  it("test collectorNotificationCountError function", () => {
    expect(actions.collectorNotificationCountError(error)).toEqual({
      type: types.COLLECTOR_NOTIFICATION_COUNT_ERROR,
      payload: error,
    });
  });
});
