/* eslint-disable no-undef */
import * as types from "../../../config/actionType";
import * as actions from "../../../action/customer/customerNotificationAction/customerNotificationCountAction";

describe("test customerNotificationCountAction", () => {
  const payload = {status: "success"};
  const error = {status: "fail"};
  it("test customerNotificationCountRequest function", () => {
    expect(actions.customerNotificationCountRequest()).toEqual({
      type: types.CUSTOMER_NOTIFICATION_COUNT_REQUEST,
    });
  });
  it("test customerNotificationCountSuccess function", () => {
    expect(actions.customerNotificationCountSuccess(payload)).toEqual({
      type: types.CUSTOMER_NOTIFICATION_COUNT_SUCCESS,
      payload,
    });
  });
  it("test customerNotificationCountError function", () => {
    expect(actions.customerNotificationCountError(error)).toEqual({
      type: types.CUSTOMER_NOTIFICATION_COUNT_ERROR,
      payload: error,
    });
  });
});
