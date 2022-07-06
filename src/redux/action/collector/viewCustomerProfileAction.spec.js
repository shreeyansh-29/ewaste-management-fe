/* eslint-disable no-undef */
import * as types from "../../config/actionType";
import * as actions from "../../action/collector/viewCustomerProfileAction";

describe("test viewCustomerProfileAction", () => {
  const data = {count: 1};
  const payload = {status: "success"};
  const error = {status: "fail"};
  it("test viewCustomerProfileRequest function", () => {
    expect(actions.viewCustomerProfileRequest(data)).toEqual({
      type: types.COLLECTOR_CUSTOMERPROFILE_REQUEST,
      payload: data,
    });
  });
  it("test viewCustomerProfileSuccess function", () => {
    expect(actions.viewCustomerProfileSuccess(payload)).toEqual({
      type: types.COLLECTOR_CUSTOMERPROFILE_SUCCESS,
      payload,
    });
  });
  it("test viewCustomerProfileError function", () => {
    expect(actions.viewCustomerProfileError(error)).toEqual({
      type: types.COLLECTOR_CUSTOMERPROFILE_ERROR,
      payload: error,
    });
  });
});
