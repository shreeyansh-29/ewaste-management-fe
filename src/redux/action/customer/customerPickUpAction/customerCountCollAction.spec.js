/* eslint-disable no-undef */
import * as types from "../../../config/actionType";
import * as actions from "../../../action/customer/customerPickUpAction/customerCountCollAction";

describe("test customerCountCollAction", () => {
  const data = {date: "25/7/2022"};
  const payload = {status: "success"};
  const error = {status: "fail"};
  it("test customerCountCollRequest function", () => {
    expect(actions.customerCountCollRequest(data)).toEqual({
      type: types.CUSTOMER_COUNT_COLL_REQUEST,
      payload: data,
    });
  });
  it("test customerCountCollSuccess function", () => {
    expect(actions.customerCountCollSuccess(payload)).toEqual({
      type: types.CUSTOMER_COUNT_COLL_SUCCESS,
      payload,
    });
  });
  it("test customerCountCollError function", () => {
    expect(actions.customerCountCollError(error)).toEqual({
      type: types.CUSTOMER_COUNT_COLL_ERROR,
      payload: error,
    });
  });
});
