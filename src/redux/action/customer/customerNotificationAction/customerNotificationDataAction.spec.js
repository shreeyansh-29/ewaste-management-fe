/* eslint-disable no-undef */
import * as types from "../../../config/actionType";
import * as actions from "../../../action/customer/customerNotificationAction/customerNotificationDataAction";

describe("test customerNotificationDataAction", () => {
  const payload = {status: "success"};
  const error = {status: "fail"};
  it("test customerNotificationDataRequest function", () => {
    expect(actions.customerNotificationDataRequest()).toEqual({
      type: types.CUSTOMER_NOTIFICATION_DATA_REQUEST,
    });
  });
  it("test customerNotificationDataSuccess function", () => {
    expect(actions.customerNotificationDataSuccess(payload)).toEqual({
      type: types.CUSTOMER_NOTIFICATION_DATA_SUCCESS,
      payload,
    });
  });
  it("test customerNotificationDataError function", () => {
    expect(actions.customerNotificationDataError(error)).toEqual({
      type: types.CUSTOMER_NOTIFICATION_DATA_ERROR,
      payload: error,
    });
  });
});
