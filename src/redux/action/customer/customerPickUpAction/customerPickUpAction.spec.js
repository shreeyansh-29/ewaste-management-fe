/* eslint-disable no-undef */
import * as types from "../../../config/actionType";
import * as actions from "../../../action/customer/customerPickUpAction/customerPickUpAction";

describe("test customerPickUpAction", () => {
  const data = {date: "25/7/2022"};
  const payload = {status: "success"};
  const error = {status: "fail"};
  it("test customerPickUpRequest function", () => {
    expect(actions.customerPickUpRequest(data)).toEqual({
      type: types.CUSTOMER_PICKUP_REQUEST,
      payload: data,
    });
  });
  it("test customerPickUpSuccess function", () => {
    expect(actions.customerPickUpSuccess(payload)).toEqual({
      type: types.CUSTOMER_PICKUP_SUCCESS,
      payload,
    });
  });
  it("test customerPickUpError function", () => {
    expect(actions.customerPickUpError(error)).toEqual({
      type: types.CUSTOMER_PICKUP_ERROR,
      payload: error,
    });
  });
});
