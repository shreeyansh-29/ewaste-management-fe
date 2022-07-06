/* eslint-disable no-undef */
import * as types from "../../config/actionType";
import * as actions from "../../action/customer/viewCollectorProfileAction";

describe("test viewCollectorProfileAction", () => {
  const data = {count: 1};
  const payload = {status: "success"};
  const error = {status: "fail"};
  it("test viewCollectorProfileRequest function", () => {
    expect(actions.viewCollectorProfileRequest(data)).toEqual({
      type: types.CUSTOMER_COLLECTORPROFILE_REQUEST,
      payload: data,
    });
  });
  it("test viewCollectorProfileActionSuccess function", () => {
    expect(actions.viewCollectorProfileSuccess(payload)).toEqual({
      type: types.CUSTOMER_COLLECTORPROFILE_SUCCESS,
      payload,
    });
  });
  it("test viewCollectorProfileError function", () => {
    expect(actions.viewCollectorProfileError(error)).toEqual({
      type: types.CUSTOMER_COLLECTORPROFILE_ERROR,
      payload: error,
    });
  });
});
