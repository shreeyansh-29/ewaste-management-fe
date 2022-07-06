/* eslint-disable no-undef */
import * as types from "../../../config/actionType";
import * as actions from "../../../action/customer/customerDropOffAction/customerDropOffAction";

describe("test customerDropOffAction", () => {
  const data = {date: "25/7/2022"};
  const payload = {status: "success"};
  const error = {status: "fail"};
  it("test customerDropOffRequest function", () => {
    expect(actions.customerDropOffRequest(data)).toEqual({
      type: types.CUSTOMER_DROPOFF_REQUEST,
      payload: data,
    });
  });
  it("test customerDropOffSuccess function", () => {
    expect(actions.customerDropOffSuccess(payload)).toEqual({
      type: types.CUSTOMER_DROPOFF_SUCCESS,
      payload,
    });
  });
  it("test customerDropOffError function", () => {
    expect(actions.customerDropOffError(error)).toEqual({
      type: types.CUSTOMER_DROPOFF_ERROR,
      payload: error,
    });
  });
});
