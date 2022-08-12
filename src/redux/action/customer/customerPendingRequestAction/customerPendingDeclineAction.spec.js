/* eslint-disable no-undef */
import * as types from "../../../config/actionType";
import * as actions from "../../../action/customer/customerPendingRequestAction/customerPendingDeclineAction";

describe("test customerPendingDeclineAction", () => {
  const payload = {status: "success"};
  const error = {status: "fail"};
  it("test customerPendingDeclineRequest function", () => {
    expect(actions.customerPendingDeclineRequest()).toEqual({
      type: types.CUSTOMER_PENDING_DECLINE_REQUEST,
    });
  });
  it("test customerPendingRequestSuccess function", () => {
    expect(actions.customerPendingDeclineSuccess(payload)).toEqual({
      type: types.CUSTOMER_PENDING_DECLINE_SUCCESS,
      payload,
    });
  });
  it("test customerPendingRequestError function", () => {
    expect(actions.customerPendingDeclineError(error)).toEqual({
      type: types.CUSTOMER_PENDING_DECLINE_ERROR,
      payload: error,
    });
  });
});
