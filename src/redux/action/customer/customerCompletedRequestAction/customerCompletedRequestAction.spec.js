/* eslint-disable no-undef */
import * as types from "../../../config/actionType";
import * as actions from "../../../action/customer/customerCompletedRequestAction/customerCompletedRequestAction";

describe("test customerCompletedRequestAction", () => {
  const payload = {status: "success"};
  const error = {status: "fail"};
  it("test customerCompletedRequestRequest function", () => {
    expect(actions.customerCompletedRequest()).toEqual({
      type: types.CUSTOMER_COMPLETED_REQUEST,
    });
  });
  it("test customerCompletedRequestSuccess function", () => {
    expect(actions.customerCompletedSuccess(payload)).toEqual({
      type: types.CUSTOMER_COMPLETED_SUCCESS,
      payload,
    });
  });
  it("test customerCompletedRequestError function", () => {
    expect(actions.customerCompletedError(error)).toEqual({
      type: types.CUSTOMER_COMPLETED_ERROR,
      payload: error,
    });
  });
});
