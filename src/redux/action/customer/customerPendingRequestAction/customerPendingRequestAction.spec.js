/* eslint-disable no-undef */
import * as types from "../../../config/actionType";
import * as actions from "../../../action/customer/customerPendingRequestAction/customerPendingRequestAction";

describe("test customerPendingRequestAction", () => {
  const payload = {status: "success"};
  const error = {status: "fail"};
  it("test customerPendingRequestRequest function", () => {
    expect(actions.customerPendingRequest()).toEqual({
      type: types.CUSTOMER_PENDING_REQUEST,
    });
  });
  it("test customerPendingRequestSuccess function", () => {
    expect(actions.customerPendingSuccess(payload)).toEqual({
      type: types.CUSTOMER_PENDING_SUCCESS,
      payload,
    });
  });
  it("test customerPendingRequestError function", () => {
    expect(actions.customerPendingError(error)).toEqual({
      type: types.CUSTOMER_PENDING_ERROR,
      payload: error,
    });
  });
});
