/* eslint-disable no-undef */
import * as types from "../../../config/actionType";
import * as actions from "../../../action/collector/collectorNotificationAction/collectorNotificationDataAction";

describe("test collectorNotificationDataAction", () => {
  const payload = {status: "success"};
  const error = {status: "fail"};
  it("test collectorNotificationDataRequest function", () => {
    expect(actions.collectorNotificationDataRequest()).toEqual({
      type: types.COLLECTOR_NOTIFICATION_DATA_REQUEST,
    });
  });
  it("test collectorNotificationDataSuccess function", () => {
    expect(actions.collectorNotificationDataSuccess(payload)).toEqual({
      type: types.COLLECTOR_NOTIFICATION_DATA_SUCCESS,
      payload,
    });
  });
  it("test collectorNotificationDataError function", () => {
    expect(actions.collectorNotificationDataError(error)).toEqual({
      type: types.COLLECTOR_NOTIFICATION_DATA_ERROR,
      payload: error,
    });
  });
});
